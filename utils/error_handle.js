var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

let auth_error =(req, res, next)=>{
  // TODO: check jwt before routes  
  next()
}
module.exports=auth_error
