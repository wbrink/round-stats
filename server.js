if (!process.env.PRODUCTION) {
  require("dotenv").config();
}

const path = require("path");
const db = require("./db");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const passport = require("passport")

const express = require("express");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());


// if in production use build folder as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}


app.use(session({
  secret: process.env.SESSION_SECRET,
  name: "connect.sid", //default value
  saveUninitialized: false,
  resave: false, // mongostore has a touch method
  store: new MongoStore({url: process.env.MONGO_URI, touchAfter: 22*3600}),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 24 hours minutes
    secure: false // set to true in production when https is available
  }
}))

// passport middleware
app.use(passport.initialize());
app.use(passport.session());







// wait for connection to database then startup the server
db.Connect(() => {
  // api-routes
  app.use(require("./api-routes"));

  // send all other requests to index.html so react takes over
  app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  })

  app.listen(PORT, () => console.log("Server Listening on Port", PORT))
})
