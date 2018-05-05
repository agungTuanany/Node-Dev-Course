const socket = io();

socket.on('connect', () =>  {
    console.log('connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var li = $('<li></li>');
    li.text(`${message.from} ${formattedTime}: ${message.text}`);

    $('#messages').append(li);
    console.log('You recieve a message from server', message);
});

socket.on('newLocationMessage', (message) => {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var li = $('<li></li>');
    var a = $('<a target="_blank"> My Current location</a>');

    li.text(`${message.from} ${formattedTime}:`);
    a.attr('href', message.url);
    li.append(a);
    $('#messages').append(li);
    console.log('You recieve a message from server', message);
});

$('#message-form').on('submit', (e) => {
    e.preventDefault();

    var messageTexbox = $('[name=message');

    socket.emit('createMessage', {
        from: 'user ',
        text: messageTexbox.val()
    }, () => {
        messageTexbox.val('')
    });
});

var locationButton = $('#send-location');
locationButton.on('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by you browser');
    }

    locationButton.attr('disabled', 'disabled').text('Sending location ...');

    navigator.geolocation.getCurrentPosition((position) => {
        locationButton.removeAttr('disabled').text('Send location');
        console.log(position);
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, () => {
        locationButton.removeAttr('disabled').text('Send location');
        alert('Unable to fetch location.');
    });
});