var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/', function(req, res){
	//res.send('Hola Mundo!');

	
	url = 'http://www.regionlambayeque.gob.pe/web/acceso-informacion?tinfo=T&cate_id=9709ADPORTAL&grup_id=970902ADPORTAL&pass=NA==&pass=NA==&pass=NA==';
	request(url, function(error, response, html){
		//si hay error
        if(!error){
        	//pasamos el html a cheerio
        	var $ = cheerio.load(html);
        	var html='';
        	$("#asidenoticias li a").each(function(i, elemento) {
        		html+=$(elemento).html()+"<br>";
        	});
        	res.send(html);
        }
    })


})

app.listen('8080')

console.log('Servidor Web 8080');

exports = module.exports = app;