const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const PublicPath = path.join(__dirname, '../public');
const port = process.env.PORT ||3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(PublicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('admin', 'Wellcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin', 'new user joined'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        // io.emit: emit the event to every singgle connection
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');

        // socket.broadcast.emit: emit to every singgle user without recieve a message you sended from server
        // socket.broadcast.emit('newMessage',generateMessage(message.from. message.text));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
