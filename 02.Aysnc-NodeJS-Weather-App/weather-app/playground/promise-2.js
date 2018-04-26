const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        const encodedAdress = encodeURIComponent(address);
        const url = ` https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress} `;
        setTimeout(() => {
            request( {
                url,
                json: true
            }, (error, response, body) => {
                if(!error & body.status === 'OK') {
                    resolve({
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longtitude: body.results[0].geometry.location.lng
                    });
                } else if (body.status === 'ZERO_RESULTS') {
                    reject('Unable to connect and to find that address');
                } else {
                    reject('You are BORING');
                }
            })
        },1500);
    });
};

geocodeAddress(' Pasar Senen').then((body) => {
    console.log(JSON.stringify(body, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
