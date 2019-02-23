let app=require('./app')
let port =process.env.port || 3000
app.listen(port,(req,res,err)=>{
  if(!err){
    console.log(`server is running on ${port}`)
  }
})
