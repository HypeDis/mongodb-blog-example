const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { apiRouter } = require('./api_routes');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

app.use('/lib', express.static(path.resolve(__dirname, '../lib')));
app.use(
  '/web_modules',
  express.static(path.resolve(__dirname, '../web_modules'))
);
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/api', apiRouter);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

/* eslint-disable */
app.use((err, req, res, next) => {
  console.log(res.statusCode);
  console.error(err.stack);
  if (res.statusCode < 400) {
    res.status(500);
  }
  res.send("oops something's broken");
});
/* eslint-enable */

module.exports = app;
