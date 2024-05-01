const app = require('./app');

require('dotenv').config();

const { PORT } = process.env;

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
