const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 8080;

// mahamudulhasanorg
// BU7eJsGSUnxXBkUX
// BU7eJsGSUnxXBkUX

// middleware
app.use(cors());
app.use(express.json());

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // const db = client.db("usersDB");
    // const userCollection = db.collection("users");
    const userCollection = client.db("usersDB").collection("users");

    // get data from db
    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // send data to db
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });
    // get unique user for update
    app.get("/users/:_id", async (req, res) => {
      const id = req.params._id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.findOne(query);
      res.send(result);
    });
    // update data
    app.put("/users/:_id", async (req, res) => {
      const id = req.params._id;
      const user = req.body;

      // mongodb operation
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const updatedResult = await userCollection.updateOne(
        filter,
        updatedUser,
        options
      );
      res.send(updatedResult);
    });
    // delete users
    app.delete("/users/:_id", async (req, res) => {
      const id = req.params._id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
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

app.get("/", (req, res) => {
  res.send("SIMPLE CRUD SERVER IS RUNNING");
});

app.listen(port, () => {
  console.log(`SIMPLE CRUD SERVER listening on Port ${port}`);
});
