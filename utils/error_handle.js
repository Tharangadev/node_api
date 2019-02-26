var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

let auth_error =(req, res, next)=>{
  console.log(req)
  next()
}
module.exports=auth_error
