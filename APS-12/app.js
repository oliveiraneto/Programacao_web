const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/astronomy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error(err));

app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => console.log('Server started on port 3000'));
