const express = require('express');
const apiRouter = express.Router();
const { Blog } = require('./db/');

apiRouter.get('/all', (req, res, next) => {
  Blog.find()
    .sort({ postedOn: 'desc' })
    .exec((err, docs) => {
      if (err) {
        next(err);
      } else {
        res.status(200).send(docs);
      }
    });
});

apiRouter.put('/edit', (req, res, next) => {
  Blog.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (err) {
        next(err);
      } else {
        res.status(200).send(doc);
      }
    }
  );
});

apiRouter.post('/create', (req, res, next) => {
  Blog.create(req.body, (err, doc) => {
    if (err) {
      next(err);
    } else {
      res.status(200).send(doc);
    }
  });
});

apiRouter.delete('/remove/:postid', (req, res, next) => {
  Blog.deleteOne({ _id: req.params.postid }, err => {
    if (err) {
      next(err);
    } else {
      res.status(200).send({ success: true });
    }
  });
});

module.exports = { apiRouter };
