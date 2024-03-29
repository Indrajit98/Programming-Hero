const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const jwt =require ('jsonwebtoken')
require('dotenv').config();



const app  =express();
const port = process.env.PORT || 5000;

// meddle wares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qloaa9d.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(uri)

function verifyJWT (req,res,next){
    // console.log(req.headers.authorization)
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).send({message: 'Unauthorized Access'})
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, function(err,decoded){
        if(err){
            res.status(401).send({message: 'Forbidden Access'})
        }
        req.decoded = decoded;
        next();
    })
}

async function run(){
    try{
        const serviceCollection = client.db('geniusCar').collection('services');
        const orderCollection = client.db('geniusCar').collection('orders');

        app.get('/services',async (req,res)=>{
            const query = {}
            const cursor = serviceCollection.find(query)
            const services = await cursor.toArray();
            res.send(services)

        })

        app.get('/services/:id', async(req,res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const service = await serviceCollection.findOne(query)
            res.send(service)


        })
        // orders api 
        app.get('/orders', verifyJWT, async (req,res) =>{
            const decoded = req.decoded;
            // console.log('inside orders api', decoded)
            if(decoded.email !== req.query.email){
                res.status(403).send({message: 'Unauthorized Access'})
            }

            // console.log(req.headers.authorization)

            let query = {};
            if(req.query.email){
                query ={
                    email: req.query.email,
                }

            }
            const cursor = orderCollection.find(query)
            const orders = await cursor.toArray();
            res.send(orders)
        })

        app.post('/orders', verifyJWT, async (req,res) =>{
            const order = req.body;
            const result = await orderCollection.insertOne(order)
            res.send(result)

        })
        app.patch('/orders/:id',verifyJWT, async (req,res)=>{
            const id = req.params.id;
            const status = req.body.status;
            const query = {_id: ObjectId(id)}
            const updatedDoc = {
                $set:{
                    status: status,
                }
                
            }
            const result = await orderCollection.updateOne(query,updatedDoc);
            res.send(result)

        })

        app.delete('/orders/:id', verifyJWT, async (req,res) => {
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await orderCollection.deleteOne(query)
            res.send(result)

        })

        app.post('/jwt', (req,res)=>{
            const user = req.body;
            // console.log(user)
            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1d'})
            res.send({token})

        })

    }
    finally{

    }

}
run().catch(err => console.error(err));

app.get('/',(req,res)=>{
    res.send('genius car server is running')
})

app.listen(port,() =>{
    console.log(`Genius car server running on ${port}`);

})