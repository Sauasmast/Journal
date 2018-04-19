var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title:'Express' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus');
});

module.exports = router;
