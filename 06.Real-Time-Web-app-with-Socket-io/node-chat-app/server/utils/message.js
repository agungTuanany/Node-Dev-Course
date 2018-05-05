const moment = require('moment');

const timeStamp = moment().valueOf()

const generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: moment(timeStamp).format()
    };
};

const generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: moment(timeStamp).format()
    };
};

module.exports = {generateMessage, generateLocationMessage};