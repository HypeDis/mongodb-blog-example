const { Schema } = require('mongoose');
const { db } = require('./db.js');

// the blogSchema should have title, postedOn and content properties
const blogSchema = new Schema({});

const Blog = db.model('Blog', blogSchema);

module.exports = { Blog };
