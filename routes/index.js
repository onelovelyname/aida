var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Welcome to Aida Collective',
    headerClass: "alt"
  });
});

router.get('/education', function(req, res, next) {
  res.render('education', {
    title: 'Aida Collective: Education',
    headerClass: ""
  });
});

router.get('/resiliency', function(req, res, next) {
  res.render('resiliency', {
    title: 'Aida Collective: Resiliency',
    headerClass: ""
  });
});

router.get('/mindfulness', function(req, res, next) {
  res.render('mindfulness', {
    title: 'Aida Collective: Mindfulness',
    headerClass: ""
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Aida Collective: Contact Us',
    headerClass: ""
  });
});

module.exports = router;
