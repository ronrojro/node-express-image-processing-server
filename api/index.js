const app = require('./app');

module.exprts = app.listen(3001, () => {
  console.log(`App running on port: ${3001}`);
});
