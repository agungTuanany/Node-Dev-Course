const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/todos' , (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Started on port ${port} `)
});