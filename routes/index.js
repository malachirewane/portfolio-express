// Import Express and create a router instance
var express = require('express');
var router = express.Router();

// --- Route Definitions ---

// Home page route
// Renders the index.ejs file and passes a title variable
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// About page route
// Sends the About Me page when /about is visited
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page route
// Displays the projects.ejs template
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Contact page route
// Renders the contact.ejs template for /contact
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Export router so it can be used in app.js
module.exports = router;
