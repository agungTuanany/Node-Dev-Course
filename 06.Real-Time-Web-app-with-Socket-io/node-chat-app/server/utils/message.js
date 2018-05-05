const moment = require('moment');

const timeStamp = moment().valueOf()
const url ='https://www.google.com/maps?q=';

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
        url: `url${latitude},${longitude}`,
        createdAt: moment(timeStamp).format()
    };
};

module.exports = {generateMessage, generateLocationMessage};