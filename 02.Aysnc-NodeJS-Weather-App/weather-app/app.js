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
'headers' can send the request that from node server to googleAPI server
'headers' also can response from the googleAPI server back to node server
From now go on you will setup your headers by yourself!.

is also show us "request", are part of HTTP protocol as an object
It's store some information about the request that was made
Inside the request have three object
    .- `"uri"`
    .- `"method"`
    .- `"headers"` << this headers is request from node server to googleAPI server
    this headers get set when you added the `json: true`.

@param error , is error when whe fecth the googleAPI server,
is error when we have a syntax error when request to googleAPI server
is error when you send the data to googleAPI is invalid

@param "code":"ENOTFOUND", You will see this error if:
1. You make a request from local machine cannot connect to the host provide it
2. you have badconnection to the internet
3. or the domain not found.


@param JSON.stringify(body,undifined,3) there is three argument we pass inspect
the last argument form JSON.stringify() is a number
the number is specified indentation in JSON format that we fetch.


**/
const request = require('request');
const url = ' https://maps.googleapis.com/maps/api/geocode/json?address=%20Kampus%20upiYAI%20salemba%20raya%20jakarta%20pusat ';
const url2 = ' https://maps.googleapis.com/maps/api/geocode/json?address=%20Pasar%20Kenari%20Salemba%20Raya%20Jakarta%20Pusat ';

request({
    //url: url,
    url,
    // url: url2,
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(error, undefined, 3));
});
