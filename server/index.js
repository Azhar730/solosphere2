const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const corsOptions = {
    origin: ['http://localhost:5173','http://localhost:5174'],
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())
const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.apuyeda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    }
  }
  run().catch(console.dir);
app.get('/', (req,res)=>{
    res.send('Hello from SoloSphere2 Server')
})
app.listen(port,()=>console.log(`Server Running on Port ${port}`))