const express = require('express');

const app = express();

app.get('/',(require,response) => {
  console.log('Hello boi');
  response.send('hello');
});

app.listen(3333);