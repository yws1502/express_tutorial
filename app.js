var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const templateRouter = require('./routes/template');

const session = require('express-session');

var app = express();

app.use(
  session({
  secret: "first project", // 임의로 작성하면 되지만 되도록이면 숨김 파일 만들어서 import 하는 형식으로 사용하자!
  resave: false, // session을 변경하지 않아도 저장할지 안할지는 정하는 것 false == session이 변경되지 않을 때는 저장 X
  saveUninitialized: true, // session을 저장되기 전에 이를 초기화할지 말지를 정하는 것
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/template', templateRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
