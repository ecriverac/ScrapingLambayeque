var request = require('request');
var cheerio = require('cheerio');


var options = {
  url: 'https://www.medellin.gov.co/irj/portal/medellin?NavigationTarget=navurl://dea8ca8796a2f10f2642b5ff7065efce',
  headers: {
    'User-Agent': 'chrome'
  }
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
    	console.log(body);
		// var $ = cheerio.load(body);
		// var html='';
		// $(".noticias h1").each(function(i, elemento) {
		// 	console.log(i);
		// 	html+=$(elemento).html()+"<br>";
		// });
		// console.log(html);
	}
}

request(options, callback);
