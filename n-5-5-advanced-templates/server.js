// How to enable nodeman to watch for the change of hbs?
// nodemon server.js -e js,hbs
//-e is stand for extension

const express = require('express');
const hbs = require('hbs');

var app = express();

//Let Handlerbars to know that it should support partials
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

//Register a helper(function) for reuse
//When handlerbars see {{}} syntax, it will come for helper first. So no need to import it
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(3009, () => {
  console.log('Server is up on port 3000');
});
