const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            descrie: 'Address to fetch weather for ',
            string:true
        }
    })
    .help()
    .alias('help', 'h')
    .argv
;

const encodedAdress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('You trying to find zero address from server');
    } else if(response.data.status === 'OVER_QUERY_LIMIT') {
        throw new Error('Your request was over, but try again');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    const forecastAPI = 'b46c5e10ee98ef13616cd907d5430e26';

    const forecastUrl = ` https://api.darksky.net/forecast/${forecastAPI}/${lat},${lat} `;
    console.log(response.data.results[0].formatted_address);
    return axios.get(forecastUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Your temperature It's currenctly ${temperature} , actually ${apparentTemperature} `);
}).catch((e) => {
    if(e.code == "ENOTFOUND") {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }
});
