var request = require('request');

request.post({
  headers: {'content-type' : 'application/x-www-form-urlencoded'},
  url:     'http://www.regionlambayeque.gob.pe/web/index/accesoinformacionajax?pass=NA==',
  body:    "tinfo=T&grup_id=970902ADPORTAL&cate_id=9709ADPORTAL&ano=2016&mes=11"
}, function(error, response, body){
  console.log(body.resu);
});