'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

//create express singleton
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).send('proof of life');
});

app.get('/success', (req, res, next) => {
  res.status(200).send('Success!!');
});

app.get('/bad', (req, res, next) => {
  next('We have an error!');
  // res.status(500).send(error);
});


// catch all needs to go at the very bottom

app.use('*', (req, res, next) => {
  res.status(404).send('Not found');
});

const start = (port) => app.listen(PORT, () => console.log('listening on port:', PORT));

module.exports = { start, app };

