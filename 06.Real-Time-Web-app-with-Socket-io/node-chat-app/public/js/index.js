// making request from the client to the server,
// to open up web-socket and keep that connection open
const socket = io();

// listen to event to connect from client
socket.on('connect', () =>  {
    console.log('connected to server');
});

// listen to event to disconnect from client
socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

// listen to event from client to server
socket.on('newMessage', (message) => {
    console.log('You recieve a message from server', message);

    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', (e) => {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'user',
        text: $('[name=message]').val()
    }, () => {

    });
});