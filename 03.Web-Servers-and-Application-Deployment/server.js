
/**
@param app.get, we just register a handler to set up a handler
  for http get request,

@param ('/') is a url, in our case is root of folder

@param (req, res), 'req' is argumnet store of information about the request coming in
 things like the headers, any body information the method that was made with request to the path.
'res' is a bunch of method. To response Http request what ever you like.

@param app.lister is gonna bind the application to the port in machine, like local machine or server machine (web-server).

@param app.use() is to setup the static directory.
**/

const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    // res.send('<h1> Hello, Express! </h1>');
    res.render("home.hbs", {
        pageTitle: 'Home Page',
        wellcomeMessage: 'Wellcome to our webserver',
    });
});


app.get('/about', (req, res) => {
    res.render("about.hbs", {
        pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request',
    });
});

app.listen(3000, () => {
    console.log("Server is up on port 3000")
});

