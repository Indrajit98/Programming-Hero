const express = require('express');
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('Simple node server running');
})
app.use(cors());
app.use(express.json());


const users = [
    {id:1,name:'indrait', email:"indrait@gmail.com"},
    {id:2,name:'mohon', email:"mohon@gmail.com"},
    {id:3,name:'joydip', email:"joydip@gmail.com"},
    {id:4,name:'shuvon', email:"shuvon@gmail.com"},
]


///////////////////////////////////////

const uri = "mongodb+srv://dbUser1:oOvEjn11N3RnJsWN@cluster0.qloaa9d.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        const userCollection = client.db('simpleNode').collection('users');
        /* const user = {
            name: 'joydip',
            email: 'joydip@gmail.com'
        } */
        /* const result = await userCollection.insertOne(user);
        console.log(result) */
        app.get('/users', async (req,res)=>{
            const cursor = userCollection.find({});
            const users = await cursor.toArray();
            res.send(users)


        })


        app.post('/users', async (req,res) =>{
            const user = req.body;
            const result = await userCollection.insertOne(user)
            console.log(result);
            user._id = result.insertedId;
            res.send(user)
            
        })
        

    }
    finally{

    }

}
run().catch(err => console.log(er));
////////////////////////////






/* app.get('/users',(req,res) => {
    console.log(req.query)
    res.send(users)
}) */

/* app.post('/users',(req,res) =>{
    // console.log('Post API called');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user);
    res.send(user)
    // console.log(req.body)

})
 */
app.listen(port, () =>{
    console.log(`simple not server running on port ${port}`);
})