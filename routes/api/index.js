let router =require('express').Router()
router.use('/users',require('./users.js'))
router.use('/books',require('./books.js'))
module.exports=router
