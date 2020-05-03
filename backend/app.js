const express = require('express');
const app = express();

const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const bodyParser = require('body-parser');
const path = require('path');
const noteRoutes = require('./routes/notes');

mongoose.connect("mongodb+srv://kevinjohar:3SnxhVlGut4kWldO@quill-editor-app-7vucf.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => {
    console.log('Connected to Database!\n')
  }).catch(() => {
  console.log('Connection Failed!\n')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static(path.join('images')));

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin',
    "*"
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );

  // Allows app to continue to next middleware
  next();
});

app.use('/api/notes', noteRoutes);

module.exports = app;
