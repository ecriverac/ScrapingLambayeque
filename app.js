var request = require('request');

var options = {
  url: 'https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://dea8ca8796a2f10f2642b5ff7065efce',
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}

request(options, callback);

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/', function(req, res){
	//res.send('Hola Mundo!');

	var options = {
	  url: 'https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://dea8ca8796a2f10f2642b5ff7065efce',
	  headers: {
	    'User-Agent': 'request'
	  }
	};

	request(options, function(error, response, html){
		//si hay error
		if (!error && response.statusCode == 200) {

            var $ = cheerio.load(html);
            res.send(html);
            
        }
    })


})

app.listen('8080')

console.log('Servidor Web 8080');

exports = module.exports = app;