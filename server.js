const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

// // MONGO DB Config
// const db = require("./config/keys").mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(
//     db,
//     { useNewUrlParser: true, useCreateIndex: true }
//   )
//   .then(() => console.log("MongoDB Connected"))
//   .catch(err => console.log(err));


// SPECIFY ENVIRONMENT
const dev = process.env.NODE_ENV !== "production";

// DEFINE PORT TO RUN SERVER
const PORT = process.env.PORT || 4000;

///INIT APP WITH EXPRESS
const app = express();

// EXPRESS MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


if (!dev) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, err => {
  if (err) console.log(err) && false;
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});