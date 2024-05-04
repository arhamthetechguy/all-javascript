const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();

app.use(express());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const uri = process.env.URI;

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
    console.log("Database is connected");
    const db = client.db("jsproject");
    const sliderCollection = db.collection("sliders");
    const productCollection = db.collection("products");
    const orderCollection = db.collection("orders");

    // Dashboard management
    app.get("/api/reports", async (req, res, next) => {
      const date = new Date();
      const today = date.toLocaleDateString();
      const condition = { date: today };
      const todaysOrder = (await orderCollection.find(condition).toArray())
        .length;

      // totalProducts
      const totalProducts = await productCollection.countDocuments();
      // totalOrders
      const totalOrders = await orderCollection.countDocuments();
      // totalSlider
      const totalSliders = await sliderCollection.countDocuments();

      const data = {
        todaysOrder,
        totalProducts,
        totalOrders,
        totalSliders,
      };
      res.send(data);
    });

    // slider management
    app.get("/api/sliders", async (req, res) => {
      const results = await sliderCollection.find().toArray();
      res.send(results);
    });

    // add slider
    app.post("/api/add-slider", async (req, res) => {
      const data = req.body;
      const results = await sliderCollection.insertOne(data);

      res.send(results);
    });

    // delete slider
    app.delete("/api/delete-slider/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await sliderCollection.deleteOne({
          _id: new ObjectId(id),
        });
        if (result.deletedCount === 1) {
          res.status(200).json({ message: "slider deleted successfully" });
        } else {
          res.status(404).json({ message: "slider not found" });
        }
      } catch (error) {
        console.error("Error deleting slider:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // product management

    // all products
    app.get("/api/all-products", async (req, res) => {
      const results = await productCollection.find().toArray();
      res.send(results);
    });

    // latest product
    app.get("/api/latest-products", async (req, res) => {
      const totalProducts = await productCollection.countDocuments();
      let skip = 0;

      if (totalProducts > 10) {
        skip = totalProducts - 10;
      } else {
        skip = 0;
      }
      const results = await productCollection.find().skip(skip).toArray();
      res.send(results);
    });

    // Get Product By Id
    app.get("/api/product-details/:id", async (req, res) => {
      const { id } = req.params;
      const results = await productCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(results);
    });

    // add product
    app.post("/api/add-product", async (req, res) => {
      const data = req.body;
      const results = await productCollection.insertOne(data);
      res.send(results);
    });

    // delete product
    app.delete("/api/delete-product/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const result = await productCollection.deleteOne({
          _id: new ObjectId(id),
        });
        if (result.deletedCount === 1) {
          res.status(200).json({ message: "Product deleted successfully" });
        } else {
          res.status(404).json({ message: "Product not found" });
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // Order management
    app.post("/api/shipping-details", async (req, res) => {
      const data = req.body;
      const results = await orderCollection.insertOne(data);

      res.send(results);
    });

    // all orders
    app.get("/api/all-orders", async (req, res) => {
      const orders = await orderCollection.find().toArray();
      res.send(orders);
    });

    app.listen(process.env.PORT, () => {
      console.log("The server is running on port " + process.env.PORT);
    });
  } finally {
  }
}
run().catch(console.dir);
