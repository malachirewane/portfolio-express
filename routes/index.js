// Set up Express router for handling page routes
var express = require('express');
var router = express.Router();

// --- Define all the page routes ---

// Home page route - shows the main portfolio page
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home',
    activePage: 'home'
  });
});

// About page route - shows my personal information
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'About Me',
    activePage: 'about'
  });
});

// Projects page route - displays my work portfolio
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
    title: 'Projects',
    activePage: 'projects'
  });
});

// Contact page route - shows contact form and info
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Me',
    activePage: 'contact'
  });
});

// Export the router to use in the main app
module.exports = router;