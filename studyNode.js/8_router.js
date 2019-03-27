// 路由接收地址/ 加载index.html 
// 路由接收地址/parse 显示hello world 其他为404
var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req, res)=>{
    var pathname = url.parse(req.url).pathname
    function send(file){
        var pathname = __dirname + '/module/' + url.parse(file).pathname
        res.writeHead(200, {'Content-type':'text/html'})
        res.end(fs.readFileSync(pathname, 'utf-8'))
    }
    switch(pathname){
        case '/':
            send('index.html');break;
        case '/parse':
            send('parse.html');break;
        default:
            send('404.html');break;
    }
}).listen(3000)

console.log('start server')