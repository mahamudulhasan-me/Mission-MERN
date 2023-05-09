const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 7070;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chocolate Management Server Now Running");
});

const uri =
  "mongodb+srv://ExploreMongoDB:cMCjiFXOuTA0p7gZ@cluster0.beeiwwt.mongodb.net/?retryWrites=true&w=majority";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const chocolateCollection = client
      .db("chocolateDB")
      .collection("chocolates");

    // add data to database
    app.post("/chocolate", async (req, res) => {
      const chocolates = req.body;
      const result = await chocolateCollection.insertOne(chocolates);
      res.send(result);
    });

    // get all data from db
    app.get("/chocolate", async (req, res) => {
      const chocolates = chocolateCollection.find();
      const result = await chocolates.toArray();
      res.send(result);
    });

    // get unique chocolate by id
    app.get("/chocolate/:_id", async (req, res) => {
      const id = req.params._id;
      const query = { _id: new ObjectId(id) };
      const result = await chocolateCollection.findOne(query);
      res.send(result);
    });

    // update chocolate info from db
    app.put("/chocolate/:_id", async (req, res) => {
      const id = req.params._id;
      const chocolate = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedChocolate = {
        $set: {},
      };
      const result = await chocolateCollection.updateOne(
        filter,
        updatedChocolate,
        options
      );
    });

    //delete data from db
    app.delete("/chocolate/:_id", async (req, res) => {
      const id = req.params._id;
      const query = { _id: new ObjectId(id) };
      const result = await chocolateCollection.deleteOne(query);
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
  console.log(`Server is listening on port ${port}`);
});
