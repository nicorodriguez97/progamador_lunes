var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* ========================================== */
/* RUTAS DE LA AGENCIA - TRAVESÍA ARGENTINA   */
/* ========================================== */

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/paquetes', function(req, res) {
  res.render('paquetes');
});

app.get('/tours', function(req, res) {
  res.render('tours');
});

app.get('/alojamientos', function(req, res) {
  res.render('alojamientos');
});

app.get('/contacto', function(req, res) {
  res.render('contacto');
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

/* error 404 */
app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {


  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
