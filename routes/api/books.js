let router=require('express').Router()
router.get('/',(req,res,next)=>{
  res.send('hooray books')
})

module.exports=router
