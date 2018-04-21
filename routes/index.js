var express = require('express');
var router = express.Router();
var application = require('../app');
var mongoose = require('mongoose');

require('../model/model');
var journalmodel = mongoose.model('journal');

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

router.post('/addform', function(req, res, next) {
  var information = {
    title: req.body.inputTitle,
    journal: req.body.inputText
  };
  new journalmodel(information).save()
  .then(check => {
    res.redirect('/ideas');
  })
});

router.post('/checking', function(req, res, next) {
  res.send("Check out 2 ----");
});

router.get('/ideas', function(req, res, next) {
  var d = new Date();
  var todaydate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
  res.render('./afterlogin/ideas', {date : todaydate});
});

router.get('/edit', function(req, res, next) {
  var d = new Date();
  var todaydate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
  res.render('./afterlogin/edit', {date : todaydate});
});

router.get('/lists', function(req, res, next) {
  var d = new Date();
  var todaydate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDay();
  res.render('./afterlogin/list', {date : todaydate});
});

module.exports = router;
