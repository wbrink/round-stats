const express = require("express");
const passport = require('./passport');
const {isAuthenticated, isAuthorized} = require("./passport/isAuthenticated");
const registerUser = require("./middleware/registerUser");
const {ObjectId} = require("mongodb");

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


router.post("/api/add-course", isAuthorized, async (req,res) => {
  // will need to validate
  let {par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18} = req.body; // if par10 - par18 is not sent in the body then the values will be undefined
  let properties;
  if (req.body.length == 18) {
    properties = {country: req.body.country, state: req.body.state, name: req.body.name, length: req.body.length, par1: par1, par2: par2, par3: par3, par4: par4, par5: par5, par6: par6, par7: par7, par8: par8, par9: par9, par10: par10, par11: par11, par12: par12, par13: par13, par14: par14, par15: par15, par16: par16, par17: par17, par18: par18}
  } else {
    properties = {country: req.body.country, state: req.body.state, name: req.body.name, length: req.body.length, par1: par1, par2: par2, par3: par3, par4: par4, par5: par5, par6: par6, par7: par7, par8: par8, par9: par9}
  }

  try {
    // see if the course already exists
    let course = await db.collection('courses').findOne({country: req.body.country, state: req.body.state, name: req.body.name, userID: ObjectId(req.user._id)});
    if (!course) {
      let result = await db.collection("courses").insertOne({...properties, userID: ObjectId(req.user._id)}); // insert the course
      res.json({result, msg: 'course inserted'})
    } else {
      res.json("course already exists");
    }
  } catch (error) {
    res.sendStatus(503); // server was relying on connection some other service which did not respond in time
  } 
})


// route to update course 
router.post("/api/update-course", isAuthorized, async (req,res) => {
  // get all the variables together (including the userID)
  let {par1, par2, par3, par4, par5, par6, par7, par8, par9, par10, par11, par12, par13, par14, par15, par16, par17, par18} = req.body; // if par10 - par18 is not sent in the body then the values will be undefined
  let properties;
  if (req.body.length == 18) {
    properties = {country: req.body.country, state: req.body.state, name: req.body.name, length: req.body.length, par1: par1, par2: par2, par3: par3, par4: par4, par5: par5, par6: par6, par7: par7, par8: par8, par9: par9, par10: par10, par11: par11, par12: par12, par13: par13, par14: par14, par15: par15, par16: par16, par17: par17, par18: par18, userID: ObjectId(req.user._id)}
  } else {
    properties = {country: req.body.country, state: req.body.state, name: req.body.name, length: req.body.length, par1: par1, par2: par2, par3: par3, par4: par4, par5: par5, par6: par6, par7: par7, par8: par8, par9: par9, userID: ObjectId(req.user._id)}
  }

  // do the updating on the page
  try {
    let result = await db.collection("courses").updateOne({country: req.body.country, state: req.body.state, name: req.body.name, userID: req.user._id}, {$set: {...properties}});
    console.log(result);
    res.json({result});
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
})

module.exports = router;
