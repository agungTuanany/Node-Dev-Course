const request = require('request');


var getWeather = (forecastLatitude, forecastLongtitude, callback) => {
    const forecastAPI = 'b46c5e10ee98ef13616cd907d5430e26';

    const encodedAdress = encodeURIComponent(forecastAPI);
    const encodedLat = encodeURIComponent(forecastLatitude);
    const encodedLng = encodeURIComponent(forecastLongtitude);

    const urlForecast = ` https://api.darksky.net/forecast/b46c5e10ee98ef13616cd907d5430e26/-6.192816199999999,106.8480559 `;
    // const urlForecast1 = `https://api.darksky.net/forecast/${encodedAdress}/${encodedLat},${encodedLng} `;
    const urlForecast2 = ` https://api.darksky.net/forecast/${forecastAPI}/${forecastLatitude},${forecastLongtitude} `;

    request({
        url: urlForecast2,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                'apparent temperature': body.currently.apparentTemperature,
                'Your timezone ': body.timezone,
                summary: body.currently.summary,
                icon: body.currently.icon,
                'your flags': body.flags.sources[3],
                'Data was call from': body.flags.units
            });
        }  else {
            callback('You unable to fetch weather');
        }
    });
}

module.exports = {
    getWeather,

}



// } else if (response.status === 400) {
//     console.log('You unable to fetch the weather cause 400');
//     console,log('You unable to connect to Forecast.io server')
// } else if(!error && response.status === 200) {
