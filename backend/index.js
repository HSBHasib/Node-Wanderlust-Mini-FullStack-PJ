require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { createRemoteJWKSet, jwtVerify } = require("jose-cjs");

const uri = process.env.MONGODB_URI;
const port = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Verify the Token
const varifyToken = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;
  if (!authHeader) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      message: "unauthorized",
    });
  }

  const JWKS = createRemoteJWKSet(
    new URL(`${process.env.CLIENT_URL}/api/auth/jwks`),
  );

  try { const { payload } = await jwtVerify(token, JWKS)
    next()
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or Expired Token"
    });
  }
};


// API Func
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    
    // await client.connect();

    const myDB = client.db("wanderlust");
    const destinationCollection = myDB.collection("destinations");
    const bookingCollection = myDB.collection("bookings");

    // Add data mongoDB dataBase
    app.post("/destination", varifyToken, async (req, res) => {
      // varifyToken,
      const destinationData = req.body;
      const result = await destinationCollection.insertOne(destinationData);

      // To send data frontend
      res.send(result);
    });

    // Pass DestinationForm Data to Frontend 'Destination Page' to display.
    app.get("/destination", async (req, res) => {
      const result = await destinationCollection.find().toArray();
      res.send(result);
    });

    // Pass Data Id wise in Frontend
    app.get("/destination/:id", varifyToken, async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.findOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    // Update Destination Data
    app.patch("/destination/:id", varifyToken, async (req, res) => {
      const { id } = req.params;
      const updateData = req.body;

      const result = await destinationCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData },
      );
      res.send(result);
    });

    // Delete Destination Data
    app.delete("/destination/:id", varifyToken, async (req, res) => {
      const { id } = req.params;
      const result = await destinationCollection.deleteOne({
        _id: new ObjectId(id),
      });
      res.send(result);
    });

    // -------- Booking Data SetUp  --------

    // Add data mongoDB dataBase
    app.post("/booking", varifyToken, async (req, res) => {
      const bookingData = req.body;
      const result = await bookingCollection.insertOne(bookingData);

      // To send data frontend
      res.send(result);
    });

    // Pass Data in Frontend
    app.get("/booking/:userId", varifyToken, async (req, res) => {
      const { userId } = req.params;
      const result = await bookingCollection.find({ userId }).toArray();
      res.send(result);
    });

    // Delete Data
    app.delete("/booking/:bookingId", varifyToken, async (req, res) => {
      const { bookingId } = req.params;
      const result = await bookingCollection.deleteOne({
        _id: new ObjectId(bookingId),
      });
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    
    // await client.db("admin").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Response Back After Server Starts First Time on post { '/' or PORT }.
app.get("/", (req, res) => {
  res.send(
    "Hy, This the first steps to build a desent project using node and mongoDB like a fullstack project. Project name is (Wendarlust)",
  );
});

// Server Start
app.listen(port, () => {
  console.log(`Server Running on port - ${port}`);
});
