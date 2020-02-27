const mongoose = require('mongoose');
const db = mongoose.createConnection('mongodb://localhost:27017/blog_site', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = { db };
