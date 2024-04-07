const jwt = require("jsonwebtoken");

async function isLoggedIn(req, res, next) {
  try {
    const cookie = req.cookies[process.env.JWT_SECRET_KEY];
    if (cookie) {
      const { user } = jwt.verify(cookie, process.env.JWT_SECRET);
      req.user = user;
      next();
    } else {
      res.status(400).json({ msg: "cookie not found" });
    }
  } catch (err) {
    res.status(401).json({ msg: "unauthorized user" });
  }
}

module.exports = {
    isLoggedIn,
}