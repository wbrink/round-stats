const MongoClient = require("mongodb").MongoClient;
const bcrypt = require("bcrypt");

const mongoURI = "mongodb://localhost:27017";

MongoClient.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(async (client) => {
    // this db already exists
    const db = client.db("golf_stats");
    db.createCollection("courses");
    // create collection and set index on username property
    await db.collection("users").createIndex({username: 1}, {unique: true});

    const hash = bcrypt.hashSync("123", 12);

    // create some users
    db.collection("users").insertMany([{username: "billy", password: hash}, {username: "john", password: hash}])
      .then(result => {
        console.log("users created", result);
      })
      .catch(error => {
        console.log(error);
      })

    client.close();
  })
  .catch(error => {
    console.error(error);
  })
