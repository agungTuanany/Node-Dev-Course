const socket = io();

socket.on('connect', () =>  {
    console.log('connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var template = $('#message-template').html();
    var html = Mustache.render(template, {
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });

    $('#messages').append(html);
});

socket.on('newLocationMessage', (message) => {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var template = $('#location-message-template').html();
    var html = Mustache.render(template, {
        from: message.from,
        url: message.url,
        createdAt: formattedTime
    });

    $('#messages').append(html);
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