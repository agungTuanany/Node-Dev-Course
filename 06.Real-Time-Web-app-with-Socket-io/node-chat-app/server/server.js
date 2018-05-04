const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const PublicPath = path.join(__dirname, '../public');
const port = process.env.PORT ||3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(PublicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newEmail', {
        from: 'localServer@localhost.com',
        to: 'localClient@localhost.com',
        text: 'Hey, You recieve an email from server to client.',
        createAt: 123
    });

    socket.on('createEmail', (newEmail) => {
        console.log('createEmail', newEmail);
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
