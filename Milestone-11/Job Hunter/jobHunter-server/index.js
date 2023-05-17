const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4040;

// middleware
app.use(cors());
app.use(express.json());

// ----------------------------------------------------
app.get("/", (req, res) => {
  res.send("Job Hunter Running now");
});

// =========================================================

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.beeiwwt.mongodb.net/?retryWrites=true&w=majority`;

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
    // create job hunter data base
    const jobHunterDB = client.db("jobHunterDB");
    // create job post collection
    const jobPostCollection = jobHunterDB.collection("jobPost");

    // ===========================================================
    // create index
    const indexKey = { title: 1, category: 1 };
    const indexOption = { name: "titleCategory" };
    jobPostCollection.createIndex(indexKey, indexOption);

    // add job post on db
    app.post("/jobPost", async (req, res) => {
      req.body.createdAt = new Date();
      const jobDetails = req.body;
      const result = await jobPostCollection.insertOne(jobDetails);
      res.send(result);
    });

    // get all jobs from db
    app.get("/alljobs/:type", async (req, res) => {
      const query = req?.params?.type;
      const filter = { jobType: query };
      console.log(query);
      if (query === "onSite" || query === "remote") {
        const result = await jobPostCollection
          .find(filter)
          .sort({ createdAt: -1 })
          .toArray();
        res.send(result);
      } else {
        const result = await jobPostCollection
          .find()
          .sort({ createdAt: -1 })
          .toArray();
        res.send(result);
      }
    });
    app.get("/myjobs/:userId", async (req, res) => {
      const userId = req?.params?.userId;
      const query = { userID: userId };
      const result = await jobPostCollection.find(query).toArray();
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
// ================================================================

app.listen(port, () => console.log("Hob Hunter listening on port " + port));
