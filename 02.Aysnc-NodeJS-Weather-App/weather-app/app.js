// https://maps.google.com/maps/api/geocode/json

const request = require('request');
const url = ' https://maps.google.com/maps/api/geocode/json?address=%20Kampus%20upiYAI%20salemba%20raya%20jakarta%20pusat ';
const url2 = ' https://maps.google.com/maps/api/geocode/json?address=%20Pasar%20Kenari%20Salemba%20Raya%20Jakarta%20Pusat ';
request({
    //url: url,
    url,
    // url: url2,
    json: true
}, (error, response, body) => {
    console.log(body);
});
