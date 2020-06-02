const express = require('express');

const app = express();

app.get('/',(require,response) => {
  console.log('Hello boi');
  res.send('hello');
});

app.listen(3333);