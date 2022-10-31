const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// 1DMMUF3g2HnaKD9F

// middleware
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://dbUser2:1DMMUF3g2HnaKD9F@cluster0.qloaa9d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run (){
    try{
        const userCollection = client.db('nodeMongoCrud').collection('users');

        app.get('/users', async(req,res)=>{
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);

        })

        app.get('/users/:id', async (req,res) =>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            const result = await userCollection.findOne(query);
            res.send(result)
        })

        app.post('/users', async (req,res)=>{
            const user = req.body;
            // console.log(user);
            const result = await userCollection.insertOne(user)
            res.send(result)
        })

        app.put('/users/:id', async (req,res) =>{
            const id = req.params.id;
            const filter = {_id: ObjectId(id)};
            const user = req.body;
            const option = {upsert:true}
            const updateUser = { 
                $set:{
                    name:user.name,
                    address:user.address,
                    email:user.email,
                }
            }
            // console.log(user)
            const result = await userCollection.updateOne(filter,updateUser,option)
            res.send(result)


        } )

        app.delete('/users/:id', async (req,res)=>{
            const id = req.params.id;
            const query = {_id: ObjectId(id)}
            // console.log('trying to delete',id);
            const result = await userCollection.deleteOne(query)
            console.log(result)
            res.send(result)
            

        });   
    }
    finally{

    }
}
run().catch(err => console.log(err));

app.get('/',(req,res) => {
    res.send('Hello from node mongodb crud server');

})
app.listen(port,() =>{
    console.log(`Listening to port ${port} `)
})