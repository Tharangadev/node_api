var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

let auth_error = (req, res, next) => {
  const authorization = req.headers.authorization;

  let token = authorization.split(" ")[1];

  console.log(token);
  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      res.status(401).json({
        message: "authentication error access denied"
      });
    } else if (decoded) {
      console.log(decoded);
      res.status(200).json({
        message: "real data"
      });
    }
  });
};
module.exports = auth_error;
