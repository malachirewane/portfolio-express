var express = require('express');
var router = express.Router();

/* Home Page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* About Page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* Projects Page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* Contact Page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;
