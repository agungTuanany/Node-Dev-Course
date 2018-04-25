/**
// https://maps.google.com/maps/api/geocode/json

@param JSON.stringify(body,undifined,3) there is three argument we pass inspect
the last argument form JSON.stringify() is a number
the number is specified indentation in JSON format that we fetch.


**/
const request = require('request');
const url = ' https://maps.google.com/maps/api/geocode/json?address=%20Kampus%20upiYAI%20salemba%20raya%20jakarta%20pusat ';
const url2 = ' https://maps.google.com/maps/api/geocode/json?address=%20Pasar%20Kenari%20Salemba%20Raya%20Jakarta%20Pusat ';
request({
    //url: url,
    url,
    // url: url2,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 3));
});
