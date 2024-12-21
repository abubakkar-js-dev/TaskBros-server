const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion,ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.y24v7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const taskBrosDb = client.db("taskBros");
const servicesCollection = taskBrosDb.collection("services");
const bookingCollection = taskBrosDb.collection("bookings");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // popular services
    app.get('/popular-services',async(req,res)=>{
        try {
            const result = await servicesCollection.find().limit(6).toArray();
            res.send(result);
        }catch(err){
            res.status(500).send('Something went wrong when fetch popular services');
        }
    });

    // get all services
    app.get('/all-services',async(req,res)=>{
        try{
            const search = req.query.search || '';
            let searchquery;
            if(search){
                searchquery = {serviceName:{$regex:search,$options:'i'}};
            }else{
                searchquery = {};
            }
            const result = await servicesCollection.find(searchquery).toArray();
            res.send(result);
        } catch(err){
            res.status(500).send('Something went wrong when fetch all services');
        }
    })

   







  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
