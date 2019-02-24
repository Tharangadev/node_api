let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let api=require('./routes/api/users')

// middleware
var auth_error=require('./utils/error_handle')


let app = express();
app.use(auth_error)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',auth_error, indexRouter);
app.use('/api',api)

module.exports = app;
