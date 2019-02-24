var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/',function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/api',require('./api/index'))
router.use('/login',require('./login/index'))

module.exports = router;
