const { MongoClient } = require("mongodb");


const url = process.env.MONGO_URI;
const dbName = "golf_stats";

let Client;
let db;


function Connect(cb) {
  MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, function (err, client) {
    console.log("connected to server");
    Client = client;
    db = client.db(dbName);
    cb();
  })
}

// get database
function getDB() {
  return db;
}

// 
function getClient() {
  return Client;
}

// if db is not initialized yet then return nothing
function getCollections() {
  if (typeof db === "object") {
    return {
      Courses: db.collection("Courses"),
      Users: db.collection("users")
    }
  }
  return;
}


function close() {
  return Client.close()
}



module.exports = {
  Connect, 
  getDB,
  getCollections,
  close
}