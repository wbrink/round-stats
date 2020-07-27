const express = require("express");
const passport = require('./passport');
const isAuthenticated = require("./passport/isAuthenticated");

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


module.exports = router;
