const jwt = require("jsonwebtoken");
const User = require("../models/User");

const varifyAdmin = async (req, res, next) => {
  const email = req.decoded.email;
  const query = { email: email };
  const user = await User.findOne(query);
  const isAdmin = user?.role == "admin";
  if (!isAdmin) {
    return res.status(403).json({ Message: "This is Not an Admin" });
  }
  next();
};
module.exports = varifyAdmin;
