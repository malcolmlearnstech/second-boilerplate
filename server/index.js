const express = require('express');
const app = express();

//setting up logging middleware
const morgan = require('morgan');
app.use(morgan('dev'));
