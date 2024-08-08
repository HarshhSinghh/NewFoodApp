const jst = require("jsonwebtoken");
const varifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send({ message: "Unauthorized to access to Mongo" });
  }
  const token = req.headers.authorization.split(" ")[1];
  jwt.varify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Token invalid" });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = varifyToken;

