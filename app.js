// Import required modules for Express and middleware setup
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import route files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Create the Express app
var app = express();

// --- View Engine Setup ---
// Set EJS as the templating engine and specify the 'views' directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// --- Middleware Setup ---
// Logs all requests in the console (for development)
app.use(logger('dev'));

// Parse incoming JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enables reading and setting cookies
app.use(cookieParser());

// Serve static files like CSS, images, and JS from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// --- Route Setup ---
// Main routes for the site
app.use('/', indexRouter);
app.use('/users', usersRouter);

// --- Error Handling ---
// Catch 404 errors and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Custom error handler for other server issues
app.use(function(err, req, res, next) {
  // Show detailed errors only in development mode
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the default error page
  res.status(err.status || 500);
  res.render('error');
});

// Export app so it can be used by the server
module.exports = app;
