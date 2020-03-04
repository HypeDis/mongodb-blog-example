const { Schema } = require('mongoose');
const { db } = require('./db.js');

const blogSchema = new Schema({
  title: { type: String, required: true, maxlength: 100 },
  postedOn: { type: Date, required: true, default: Date.now() },
  content: { type: String, required: true },
  tags: { type: Array },
});

const Blog = db.model('Blog', blogSchema);

module.exports = { Blog };
