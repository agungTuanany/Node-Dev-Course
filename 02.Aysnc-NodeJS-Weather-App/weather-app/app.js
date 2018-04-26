/**
// https://maps.googleapis.com/maps/api/geocode/json

@param request. request module have 2 argument to pass in.

    request({}, (error, response, body) => { )};

object and a callback function.
In the request module the callback function must have 3 argument to fetch the API data.

@param body is part of HTTP, when you make request to a website
the data that comeback is the 'body' (argument from  callback-function) of the request.
The body can came in HTML-webpage, and the body also can came in JSON information

@param response. response give us some objects came in with JSON information

is show us the "statusCode" .
The statusCode is something comesback from HttpRequest part of the response
and tell you exactly how the request went.

Is also show us the "body". same as @param body up above.

Is also show us the "headers", are also part of HTTTP protocol as an object
there are key value pairs. the key and the value are both string.
'headers' can send the request from node server to googleAPI server
'headers' also can response from the googleAPI server back to node server
From now go on you will setup your headers by yourself!.

is also show us "request", are part of HTTP protocol as an object
It's store some information about the request that was made.
Inside the request have three object
    .- `"uri"`
    .- `"method"`
    .- `"headers"` << this headers is request from node server to googleAPI server
    this headers get set when you added the `json: true`.

@param error , is error when we fetch the googleAPI server,
is error when we have a syntax error when request to googleAPI server
is error when we send the data to googleAPI is invalid

@param "code":"ENOTFOUND", You will see this error if:
1. You make a request from local machine cannot connect to the host provide it
2. you have badconnection to the internet
3. or the domain not found.

@param JSON.stringify(body,undifined,3) there is three argument we pass inspect
the last argument form JSON.stringify() is a number
the number is specified indentation in JSON format that we fetch.


**/
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./forecast/forecast');

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 3));
        console.log(`Your address: ${results.address}`);
        weather.getWeather( results.latitude, results.longtitude,(errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(JSON.stringify(weatherResults, undefined, 3));
                console.log(`Your temperature It's currenctly ${weatherResults.temperature} , actually ${weatherResults.apparentTemperature} `);
            }
        });
    }
});

// const forecastLatitude = '-6.192816199999999'; //-6.192816199999999
// const forecastLongtitude = '106.8480559'; 	//106.8480559
