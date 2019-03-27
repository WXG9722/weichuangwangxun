var http = require('http')
var fs = require('fs')
var url = require('url')
var querystring = require('querystring')
var dns = require('dns')

http.createServer((req, res)=>{
    var pathname = url.parse(req.url).pathname
    switch(pathname){
        case '/':
            goIndex(res);break;
        case '/parse':
            resAdd(req, res);break;
        default :
            res.writeHead(404, {'Content-type':'text/plain'})
            res.end('404 not found')
            break;
    }
}).listen(3000)

console.log('start server')

function goIndex(res){
    var pathname = __dirname+'/module/'+url.parse('index.html').pathname
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(fs.readFileSync(pathname), 'utf-8')
}
function resAdd(req, res){
    // 缓冲区字符串拼接
    var postData = '';
    req.setEncoding('utf8')
    // addListener是event事件触发器中的api data事件是 当接收到数据的时触发该事件
    req.addListener('data', function(postChunk){
        postData += postChunk
    })
    // end事件当 socket 的另一端发送一个 FIN 包的时候触发，从而结束 socket 的可读端。
    req.addListener('end', function(){
        var dnsObj = querystring.parse(postData)
        var dnsStr = dnsObj.search_dns
        res.writeHead(200, {'Content-type':'text/plain'})
        res.end(dnsStr)
    })
}
