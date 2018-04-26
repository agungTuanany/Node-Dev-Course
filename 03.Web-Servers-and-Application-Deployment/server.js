/**
@param app.get, we just register a handler to set up a handler
  for http get request,

@param ('/') is a url, in our case is root of folder

@param (req, res), 'req' is argumnet store of information about the request coming in
 things like the headers, any body information the method that was made with request to the path.
'res' is a bunch of method. To response Http request what ever you like.

@param app.lister is gonna bind the application to the port in machine, like local machine or server machine (web-server).
**/

const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1> Hello, Express! </h1>');
    res.send({
        name: "jono",
        lastName: "major",
        likes: [
            "soccer",
            "cycling",
            'swiming'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request',
    });
});

app.listen(3000);

