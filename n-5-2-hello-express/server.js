const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');

  //Express can know what kind of data type he is sending back automatically.
  //json!
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(9000);
