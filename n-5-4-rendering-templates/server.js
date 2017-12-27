const express = require('express');
const hbs = require('hbs');

var app = express();

//set that express want to use handlerbars as a templating engine
//template engine allows to inject variables to the html? => dynamic website
//Seems like this template will refer to the folder 'views'
//file extension is .hbs (mustache syntax)
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  //render allows express to use setted up templating engine to render page
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
