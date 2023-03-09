// import dependencies
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Functions
async function requireAuth(req, res, next) {
  try {
    // Read token off cookies
    const token = req.cookies.Authorization;

    // Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    // Check experation of token
    if (Date.now() > decoded.exp) return res.sendStatus(401);

    // Find user using decodec sub
    const user = await User.findById(decoded.sub);
    if (!user) return res.sendStatus(401);

    // Attach user to req
    req.user = user;

    // Continue on
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

// Exporting functions
module.exports = requireAuth;
