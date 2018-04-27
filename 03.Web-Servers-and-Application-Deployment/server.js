
/**
@param app.get, we just register a handler to set up a handler for http get request,

@param ('/') is a url, in our case is root of folder

@param (req, res), 'req' is argumnet store of information about the request coming in,
things like the headers, any body information the method that was made with request to the path.
'res' is a bunch of methods. ei, method Tt response Http request what ever you like.

@param app.lister is gonna bind the application to the port in machine, like local machine or server machine (web-server).

@param app.use() is to setup the static directory.

@param app.use(. .next) 'next' exist so you can tell express when your middleware function is done, this is usefull to registery single express app.

when we do something async the middleware function in express not gonna move to execute the request or result untill you defined 'next()' to the application to continue to run.
This mean if yur middleware doesn't call nex() your handlers for each requuest never gonna fire from callback.
**/

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to append to server.log');
        }
    });
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamIt', (text) => text.toUpperCase());

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

