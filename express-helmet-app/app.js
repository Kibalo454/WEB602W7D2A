'use strict';

const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
  console.log('route "/" hit');
  res.send('Hello from Express');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
