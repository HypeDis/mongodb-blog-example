const express = require('express');
const apiRouter = express.Router();
const { Blog } = require('./db/');

apiRouter.get('/all', (req, res, next) => {
  res.status(200).send([]);
});

apiRouter.put('/edit', (req, res, next) => {
  res.sendStatus(200);
});

apiRouter.post('/create', (req, res, next) => {
  res.sendStatus(200);
});

apiRouter.delete('/remove/:postid', (req, res, next) => {
  res.sendStatus(200);
});

module.exports = { apiRouter };
