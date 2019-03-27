// css文件需要我们告诉浏览器按照css文件的解析方式去解析
var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req, res)=>{
    var pathname = __dirname + '/module/' + url.parse('index2.html').pathname
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(fs.readFileSync(pathname, 'utf-8'))
}).listen(3000)

console.log('start server')

// 在解决上问题之前 我们需要了解一下querystring
// querystring可以将字符串转换为对象 get提交的参数直接使用这个方法就变成对象

// node中net是关于tcp dgram是udp

