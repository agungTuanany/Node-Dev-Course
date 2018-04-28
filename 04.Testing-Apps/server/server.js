const express = require('express');

var app = express();

var port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello, world!');
    res.status(404).send({
        error: 'Page not Found',
        name: 'Todo app V1.0'
    });
});

// Get/users
app.get('/users',(req, res) => {
    res.send([{
        name: "Jono",
        age: 25,
        address: "Kodam Jaya"
    }, {
        name: "Jaroko",
        // age: 23,
        address: "Kodim Pusat"
    }, {
        name: "Ucha",
        age: 32,
        // address: "Koramil Pusat"
    }]);
});

app.listen(port);

module.exports ={
    app,
}