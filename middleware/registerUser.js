const bcrypt = require("bcrypt");

// middleware to check the password length and username length and hash the password
function registerUser(req,res,next) {
  const {username, password} = req.body;

  // if username is tooshort
  if (username.length < 3) {
    return res.json({error: "Username must be 3 characters or longer"});
  }

  if (password.length < 6) {
    return res.json({error: "Password must be 6 characters or longer"});
  }

  // hash the password and send it with res.locals (properties in this object are valid only for the lifetime of the request)
  res.locals.password = bcrypt.hashSync(password, 12);
  next();
}


module.exports = registerUser;
