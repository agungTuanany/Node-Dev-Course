const request = require('request');

var geocodeAddress = (address, callback) => {
    const encodedAdress = encodeURIComponent(address);
    // const decodedAdress = decodeURIComponent(geocodeAPI);

    const url = ` https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress} `;
    const url2 = ' https://maps.googleapis.com/maps/api/geocode/json?address=%20Pasar%20Kenari%20Salemba%20Raya%20Jakarta%20Pusat ';
    request({
        url,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(`Unabale to connect to Google servers,`);
        } else if(body.status === 'ZERO_RESULTS') {
            callback('Unable to find your address you looking for--==- ');
        } else if(!error && body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            });
        } else {
            console.log("Are you put the correct address?");
        }
    });
};

module.exports = {
    geocodeAddress,

};
