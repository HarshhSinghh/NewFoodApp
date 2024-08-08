const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

console.log(process.env.DB_USER); // remove this after you've confirmed it is working

// Middlewre
app.use(cors());
app.use(express.json());
// Mongo Db Configuration using mongoose.Mongoose,
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodiserver.r6u8od9.mongodb.net/foodiserver?retryWrites=true&w=majority&appName=FoodiServer`
  )
  .then(() => {
    console.log("Mongo DB Connected Successfuly");
  })
  .catch((error) => {
    console.log("Error connecting to the MongoDB", error);
  });

// Jwt Authentiction
app.post("/jwt", async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1hr",
  });
  res.send({ token });
});



// Import Routes

const menuRoutes = require("./api/routes/menuRoutes");
const cartRoutes = require("./api/routes/cartRoutes");
const userRoutes = require("./api/routes/userRoutes");
app.use("/menu", menuRoutes);
app.use("/cart", cartRoutes);
app.use("/user", userRoutes);

// Monfo DB  Config
// HarshSingh261994
// HarshSingh261994

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@floodcluster.kgawpp5.mongodb.net/?retryWrites=true&w=majority&appName=FloodCluster`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   tls: true,
//   tlsInsecure: true, // For development only
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     const menuCollection = client.db("FoodProjects").collection("menus");
//     const cartCollection = client.db("FoodProjects").collection("cartItems");
//     console.log(menuCollection);
//     console.log(cartCollection);

//     // All Menu Items Operations
//     app.get("/menus", async (req, res) => {
//       const result = await menuCollection.find().toArray();
//       res.send(result);
//     });

//     app.post("/carts", async (req, res) => {
//       const cartItem = req.body;
//       const resu = await cartCollection.insertOne(cartItem);
//       res.send(resu);
//       console.log(resu);
//     });

//     app.get("/cartItems", async (req, res) => {
//       const email = req.query.email;
//       const filter = { email: email };
//       const result = await cartCollection.find(filter).toArray();
//       res.send(result);
//     });

//     // get specific cart
//     app.get("/cart/:id", async (res, req) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await cartCollection.findOne(filter);
//       res.send(result);
//     });

//     // delet a cart
//     app.delete("/cart/:id", async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const result = await cartCollection.deleteOne(filter);
//       res.send(result);
//     });

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 2 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@foodicluster.5qkg5vd.mongodb.net/?retryWrites=true&w=majority&appName=FoodiCluster`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     // database and collection
//     const menuCollection = client.db("FoodiWorld").collection("menus");
//     const cartCollection = client.db("FoodiWorld").collection("cartItems");

//     // All Menu Items Operations
//     app.get("/menu", async (req, res) => {
//       const result = await menuCollection.find().toArray();
//       res.send(result);
//     });

//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
// }
// run().catch(console.dir);

app.get("/", varifyToken, (req, res) => {
  res.send("Hello Developers");
});

app.listen(port, () => {
  console.log(`Example App is being listened on port ${port} `);
});
