const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qloaa9d.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(uri);

function verifyJWT(req,res,next){
    // console.log('token Inside VerifyJWT', req.headers.authorization);
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send('unauthorized')
    }
    const token = authHeader.split(' ')[1];
    // console.log(token);
    jwt.verify(token,process.env.ACCESS_TOKEN, function (err, decoded){
        if(err){
            return res.status(403).send({message: 'forbidden access'})
        }
        req.decoded = decoded;
        next()
    })


}


async function run() {
    try{
        const appointmentOptionCollection = client.db('doctorsPortal').collection('appointmentOptions');
        const bookingsCollection = client.db('doctorsPortal').collection('bookings')
        const usersCollection = client.db('doctorsPortal').collection('users')
        const doctorsCollection = client.db('doctorsPortal').collection('doctors')

        const verifyAdmin = async (req,res,next) =>{
            // console.log('inside verifyAdmin', req.decoded.email);
            const decodedEmail = req.decoded.email;
            const query = {email:decodedEmail};
            const user = await usersCollection.findOne(query);
            if(user?.role !== 'admin'){
                return res.status(403).send({message: 'forbidden access'})
            }
            next()
        }
        
        
        app.get('/appointmentOptions', async (req,res) => {
            const date = req.query.date;
            // console.log(date);
            const query = {};
            const options = await appointmentOptionCollection.find(query).toArray();
            
            const bookingQuery ={appointment:date}
            const alreadyBooked = await bookingsCollection.find(bookingQuery).toArray();
            options.forEach(option => {
                const optionBooked = alreadyBooked.filter(book => book.treatment === option.name)
                const bookedSlots = optionBooked.map(book => book.slot)
                const remainingSlots = option.slots.filter(slot => !bookedSlots.includes(slot))
                option.slots = remainingSlots;
                // console.log(date,option.name, remainingSlots.length)
            })
            
            res.send(options)
        })

        ///////////////////////////////
        app.get('/v2/appointmentOptions',async (req,res) =>{
            const date = req.query.date;
            const options = await appointmentOptionCollection.aggregate([
                {
                    $lookup: {
                          from: 'bookings',
                          localField: 'name',
                          foreignField: 'treatment',
                          pipeline: [
                            {
                                $match:{
                                    $expr:{
                                        $eq:['$appointment', date]
                                    }

                                }
                            }
                           ],
                          as: 'booked',
                       }
                 },
                 {
                    $project:{
                        name:1,
                        slots:1,
                        booked:{
                            $map:{
                                input:'$booked',
                                as:'book',
                                in: '$$book.slot'
                            }
                        }
                    }

                 },
                 {
                    $project:{
                        name:1,
                        slots: {
                            $setDifference:['$slots', '$booked']
                        }
                    }
                 }

            ]).toArray()
            res.send(options)
        })

        //////////////////////////////////

        app.get('/appointmentSpecialty', async (req,res) =>{
            const  query ={};
            const  result = await appointmentOptionCollection.find(query).project({name:1}).toArray();
            res.send(result)

        })

        app.get('/bookings', verifyJWT, async (req,res) =>{
            const email = req.query.email;
            const decodedEmail = req.decoded.email;

            if(email!==decodedEmail){
                return res.status(403).send({message: 'forbidden access'})
            }

            const query = {email: email}
            const bookings = await bookingsCollection.find(query).toArray();
            res.send(bookings)
        })

        app.post('/bookings', async (req,res) => {
            const booking = req.body;
            // console.log(booking)
            const query = {
                appointment: booking.appointment,
                email:booking.email,
                treatment: booking.treatment,
            }
            const alreadyBooked = await bookingsCollection.find(query).toArray();
            if(alreadyBooked.length){
                const message = `You already have a booking on ${booking.appointment}`
                return res.send({acknowledged:false,message})
            }
           
            const result = await bookingsCollection.insertOne(booking)
            res.send(result);
        })

        app.get('/jwt', async (req,res) =>{
            const email = req.query.email;
            const query = {email:email}
            const user = await usersCollection.findOne(query);
            if(user){
                const token = jwt.sign({email}, process.env.ACCESS_TOKEN, {expiresIn: '1d'})
                return res.send({access_token: token})
            }
            console.log(user)
            res.status(403).send({access_token:''})
        })

        app.get('/users',async (req,res) =>{
            const query = {};
            const users = await usersCollection.find(query).toArray();
            res.send(users)
        })
        app.get('/users/admin/:email',async(req,res)=>{
            const email = req.params.email;
            const query = {email};
            const user = await usersCollection.findOne(query);
            res.send({isAdmin: user?.role === 'admin'});

        })


        app.post('/users', async (req,res) =>{
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.send(result)
        })

        app.put('/users/admin/:id', verifyJWT, verifyAdmin, async (req,res) =>{

            /* const decodedEmail = req.decoded.email;
            const query = {email:decodedEmail};
            const user = await usersCollection.findOne(query);
            if(user?.role !== 'admin'){
                return res.status(403).send({message: 'forbidden access'})
            } */

            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const option = { upsert:true};
            const update = {
                $set: {
                    role:'admin'
                }
            }
            const result = await usersCollection.updateOne(filter,update,option)
            res.send(result)
        } )

        app.post('/doctors',verifyJWT,verifyAdmin, async (req,res)=>{
            const doctors = req.body;
            const result = await doctorsCollection.insertOne(doctors);
            res.send(result)

        });

        app.get('/doctors', verifyJWT, verifyAdmin, async (req,res) =>{
            const query = {};
            const doctors = await doctorsCollection.find(query).toArray();
            res.send(doctors)
        })

        app.delete('/doctors/:id', verifyJWT, verifyAdmin, async(req,res) =>{
            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const result = await doctorsCollection.deleteOne(filter);
            res.send(result);

        })

        

    }
    finally{

    }

}
run().catch(console.log)


app.get('/', async (req,res) => {
    res.send('doctors portal server is running')
})
app.listen(port,() => console.log('Doctors portal running') )