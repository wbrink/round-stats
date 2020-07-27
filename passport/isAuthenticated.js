function isAuthenticated(req, res, next) {
  if (req.user) {
    res.json(true)
  } else {
    res.json(false);
  }
}

module.exports = isAuthenticated;