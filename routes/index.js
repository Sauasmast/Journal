var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title:'Express' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/check', function(req, res, next) {
  res.send("Check out ----");
});

router.post('/checking', function(req, res, next) {
  res.send("Check out 2 ----");
});

module.exports = router;
