const faker = require('faker');
const { Blog, db } = require('./index.js');

function generateBlogPostData() {
  const pCount = Math.ceil(Math.random() * 100);
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(pCount, '\n'),
    postedOn: faker.date.between('2019-01-01', '2020-2-29'),
  };
}

function createBlogPost() {
  const blogPost = generateBlogPostData();
  return Blog.create(blogPost);
}

function blogPostSeeds(numPosts) {
  return Array(numPosts)
    .fill(null)
    .map(() => createBlogPost());
}

db.dropDatabase()
  .then(() => {
    console.log('seeding db');
    return Promise.all(blogPostSeeds(10));
  })
  .then(() => {
    return db.close();
  })
  .then(() => {
    console.log('connection closed');
  })
  .catch(err => {
    console.error(err);
  });
