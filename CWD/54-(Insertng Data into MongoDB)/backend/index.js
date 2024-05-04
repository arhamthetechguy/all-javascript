const { MongoClient, ServerApiVersion } = require("mongodb");
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

async function insertuserData() {
  await client.connect();
  const userInfo = client.db("jslearning").collection("userinfo");

  app.post("/users", async (req, res) => {
    const data = req.body;
    const response = await userInfo.insertOne(data);

    res.send(response);
  });
}
insertuserData();

app.listen(4000, () => {
  console.log("The server is listening");
});
