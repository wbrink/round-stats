function isAuthenticated(req, res, next) {
  if (req.user) {
    res.json(true)
  } else {
    res.json(false);
  }
}

function isAuthorized(req,res,next) {
  if (!req.user) {
    res.sendStatus(403);
  } else {
    next();
  }
}

module.exports = {isAuthenticated, isAuthorized};