const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { request } = require("express");
const app = express();
const port = process.env.PORT || 7070;

// middleware
app.use(cors());
app.use(express.json());

// yccb7EnDj54iW740
// mahmud-mangoHouse

app.get("/", (req, res) => {
  res.send("MANGO HOUSE OPEN NOW");
});

// mahamudulhasanorg
// BU7eJsGSUnxXBkUX
// BU7eJsGSUnxXBkUX

const uri =
  "mongodb+srv://mahamudulhasan:BU7eJsGSUnxXBkUX@cluster0.beeiwwt.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const mangoCollections = client.db("mangoDb").collection("mangos");

    //added data on db
    app.post("/mangos", async (req, res) => {
      const mango = req.body;
      const result = await mangoCollections.insertOne(mango);
      res.send(result);
    });
    // get data form db
    app.get("/mangos", async (req, res) => {
      const mangos = await mangoCollections.find().toArray();
      res.send(mangos);
    });
    // get single data from db
    app.get("/mangos/:_id", async (req, res) => {
      const id = req.params._id;
      const query = { _id: new ObjectId(id) };
      const result = await mangoCollections.findOne(query);
      res.send(result);
    });
    // delete data from db
    app.delete("/mangos/:_id", async (req, res) => {
      const id = req.params._id;
      const query = { _id: new ObjectId(id) };
      const result = await mangoCollections.deleteOne(query);
      res.send(result);
    });
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
app.listen(port, () => {
  console.log(`Mango Hose Listening on port ${port}`);
});
