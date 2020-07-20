if (!process.env.PRODUCTION) {
  require("dotenv").config();
}

const path = require("path");
const express = require("express");

const app = express();

const PORT = process.env.PORT;


// quick login route that returns true
app.get("/api/authenticated", (req,res) => {
  res.json(false);
})


app.listen(PORT, () => console.log("Server Listening on Port", PORT))