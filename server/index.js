const app = require('./app');
const { db } = require('./db/index.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected');
  app.listen(3000, () => {
    console.log('server started on http://localhost:3000');
  });
});
