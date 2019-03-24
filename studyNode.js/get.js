var http = require('http')
var url = require('url')
var fs = require('fs')
var querystring = require('querystring')

http.createServer(function(req, res){
    var urlStr = url.parse(req.url).query;

}).listen(3000);

console.log('server start')