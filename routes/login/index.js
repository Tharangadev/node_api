let logindetails=require('./fake_log')
let router=require('express').Router()
let bcrypt=require('bcryptjs')

router.get('/',(req,res,send)=>{
  if(req.query.name!==undefined && req.query.password!==undefined){
     bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.
});
  }else
  {
    res.status(401).json({
      message:"user name or password is wrong"
    })
  }
})
module.exports = router;
