// Import the modules needed for Express
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import my route files - only index router needed
var indexRouter = require('./routes/index');

// Create the main Express application
var app = express();

// --- Setup the view engine ---
// Tell Express to use EJS for templates and where to find them
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// --- Setup middleware ---
// Log requests to the console for debugging
app.use(logger('dev'));

// Parse JSON and form data from requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable cookie handling
app.use(cookieParser());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// --- Setup routes ---
// Connect URLs to their route handlers
app.use('/', indexRouter);
// Removed users router since we don't need user functionality

// --- Error handling ---
// Handle 404 errors - page not found
app.use(function(req, res, next) {
  next(createError(404));
});

// Handle all other errors
app.use(function(err, req, res, next) {
  // Only show full error details in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Show the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export the app for the server to use
module.exports = app;