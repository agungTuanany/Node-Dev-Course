// making request from the client to the server,
// to open up web-socket and keep that connection open
const socket = io();

// listen to event to connect from client
socket.on('connect', function ()  {
    console.log('connected to server');

    // emitting to events from client to server
    socket.emit('createEmail', {
        from: 'localClient@localhost.com',
        to: 'localServer@localhost.com',
        text: 'Hey, you recieve an email from client to server',
        createdAt: "123bca"
    });
});

// listen to event to disconnect from client
socket.on('disconnect', function ()  {
    console.log('Disconnected from server');
});

// listen to event from client to server
socket.on('newEmail', function (email) {
    console.log('You recieve an email from server', email);
});