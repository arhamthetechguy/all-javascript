const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://developerarham:manenamon@cluster0.hcy0g7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function findData() {
  await client.connect();
  const filterProducts = client.db("jslearning").collection("products");

  app.get("/details", async (req, res) => {
    const id = req.query.id;
    const filter = { _id: new ObjectId(id) };

    console.log(filter);

    const data = await filterProducts.findOne(filter);
    res.send(data);
  });
}
findData();

app.listen(5000, () => {
  console.log("The server is listening!");
});
