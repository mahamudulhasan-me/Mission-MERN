const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4040;

// middleware
app.use(cors());
app.use(express.json());

const verifyJwt = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res
      .status(401)
      .send({ error: true, message: "Authorization required" });
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SIGNATURE, (err, decode) => {
    if (err) {
      return res
        .status(403)
        .send({ error: true, message: "Authorization failed" });
    } else {
      req.decoded = decode;
      next();
    }
  });
};
// ----------------------------------------------------
app.get("/", (req, res) => {
  res.send("Job Hunter Running now");
});

// =========================================================

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

    //===========================================================
    // create index
    const indexKey = { title: 1, category: 1 };
    const indexOption = { name: "titleCategory" };
    jobPostCollection.createIndex(indexKey, indexOption);

    //===========================================================
    // create JWT token
    app.post("/jwt", (req, res) => {
      const userID = req.body;
      const token = jwt.sign(userID, process.env.JWT_SIGNATURE, {
        expiresIn: "1h",
      });
      res.send({ token });
    });
    //===========================================================
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
    // get jobs by user
    app.get("/myjobs/:userId", verifyJwt, async (req, res) => {
      const userId = req?.params?.userId;
      const decodedInfo = req.decoded;

      // if (decodedInfo.userId !== userId) {
      //   return res
      //     .status(403)
      //     .send({ error: true, message: "Authorized Access" });
      // }
      const query = { userID: userId };
      const result = await jobPostCollection.find(query).toArray();
      res.send(result);
    });

    // get jobs by search
    app.get("/myjobsBySearch/:search", async (req, res) => {
      const searchText = req?.params?.search;
      const query = {
        $or: [
          { title: { $regex: searchText, $options: "i" } },
          { category: { $regex: searchText, $options: "i" } },
        ],
      };
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
