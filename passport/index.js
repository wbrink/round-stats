var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var bcrypt = require("bcrypt");

const {ObjectId} = require("mongodb")

var db = require("../db").getDB();
const User = db.collection("users");





passport.use(new LocalStrategy({
  usernameField: 'username', // represents req.body.username
  passwordField: 'password' // represents req.body.password
},

function(username, password, done) {
  User.findOne({ username: username }, function (err, user) {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Invalid Login' });
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: 'Invalid Password' });
    }
    // console.log("in passport,", user)
    return done(null, user);
  });
}
))



passport.serializeUser(function(user, done) {
  // console.log("serializing user");
  done(null, user._id);
});


passport.deserializeUser(function(id, done) {
  // console.log("deserializing", id);
  User.findOne({_id: ObjectId(id)}, function(err, user) {
    done(err, user);
    // console.log(user);
  });
});


module.exports = passport;