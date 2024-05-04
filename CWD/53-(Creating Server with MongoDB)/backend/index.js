const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server!");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://developerarham:manenamon@cluster0.hcy0g7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// async function loadData() {
//   await client.connect();
//   const productCollection = client.db("jslearning").collection("products");

//   app.get("/products", async (req, res) => {
//     const product = await productCollection.find().toArray();
//     res.send(product);
//   });
// }
// loadData();

async function loadApi() {
  await client.connect();
  const productCollection = client.db("jslearning").collection("products");

  app.get("/productlist", async (req, res) => {
    const product = await productCollection.find().toArray();
    res.send(product);
  });
}
loadApi();

app.listen(4000, () => {
  console.log("The server is listening");
});
