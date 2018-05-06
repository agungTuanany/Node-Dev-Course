/**
in message.test:

when you use timeStamp variabele you expect it as a 'number'
when you use moment(timeStamp) you expect it as a 'object'
when you use moment(timeStamp).format() you expect it as a 'string'
*/

const moment = require('moment');

const timeStamp = moment().valueOf();

const generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: timeStamp
        // moment(timeStamp).format()
    };
};

const generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: timeStamp
        // moment(timeStamp).format()
    };
};

module.exports = {generateMessage, generateLocationMessage};