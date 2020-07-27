const express = require("express");
const passport = require('./passport');
const isAuthenticated = require("./passport/isAuthenticated");
const registerUser = require("./middleware/registerUser");

const db = require("./db").getDB();

const router = express.Router();


// quick login route that returns true
router.get("/api/authenticated", (req,res) => {
  res.json(req.user);
});


router.post("/api/login", (req,res,next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.json({msg: "login failed"}) }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json({msg: "login successful"})
    });
  })(req, res, next);
});


router.get("/api/logout", (req,res) => {
  req.logOut();
  res.json(true);
})


router.post("/api/register", registerUser, (req,res) => {
  const username = req.body.username;
  // register the user
  // middleware hashes the password in res.locals.password
  db.collection("users").insertOne({username: username, password: res.locals.password }, (error, result) => {
    if (error) {
      if (error.code == 11000) {
        return res.json({error: "username already exists"});
      }
    } else {
      // log the user in
      // temporary redirect to login route and sends the req object with it then returns
      res.redirect(307, "/api/login");
    }
  })
})

module.exports = router;
