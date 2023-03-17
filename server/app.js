const express = require('express');
const app = express();
const bodyParser = require('body-parser');

/*
SETTING UP LOGGING MIDDLEWARE - this middleware is response for logging 
requests & responses sent between the client and the server
*/
const morgan = require('morgan');
app.use(morgan('dev'));

//setting up static middleware
app.use(express.static(path.join(__dirname, '../public')));

//setting up parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//will match all backend requests using '/api'
app.use('/api', require('./api'));

//backend will serve up the index.html for any requests that don't match to an existing backend route
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
