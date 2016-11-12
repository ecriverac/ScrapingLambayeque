var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/', function(req, res){
  res.send('Hola Mundo!');
})

app.listen('8080')

console.log('Servidor Web 8080');

exports = module.exports = app;