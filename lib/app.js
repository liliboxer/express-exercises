const express = require('express');
const app = express();

app.use(express.static('./public'));

const dogs = [
  {name: 'spot', age: 5, weight: '20lbs'},
  {name: 'clifford', age: 10, weight: '100lbs'},
  {name: 'lassy', age: 3, weight: '5lbs'}
];

app.get('/api/v1/dog', (req, res) => {
  res.send(dogs);
});

module.exports = app;