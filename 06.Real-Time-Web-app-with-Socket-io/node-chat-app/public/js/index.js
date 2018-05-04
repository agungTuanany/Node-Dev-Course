// making request from the client to the server,
// to open up web-socket and keep that connection open
const socket = io();

// listen to event to connect from client
socket.on('connect', function ()  {
    console.log('connected to server');
});

// listen to event to disconnect from client
socket.on('disconnect', function ()  {
    console.log('Disconnected from server');
});

// listen to event from client to server
socket.on('newMessage', function (message) {
    console.log('You recieve a message from server', message);
});