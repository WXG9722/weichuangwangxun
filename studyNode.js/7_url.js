var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function(req, res){
    // 1 index.html读入内存(文件路径 读取方法：同步)
    // 2.把内存的数据变成数据包
    // 3.发送数据包到chrome

    // 1.文件读入内存
    // __dirname表示当前路径 后面可以直接拼上index.js 但不建议这样做
    // var pathname = __dirname + '/module/' + 'index,js'
    // 建议使用url.parse
    var pathname = __dirname + '/module/' + url.parse('index.html').pathname
    // 2.读取文件路径
    var pathobj = fs.readFileSync(pathname, 'utf-8')
    // 3.发送数据包
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(pathobj)
    
    // 以上操作可以理解为vue的路由原理（？存疑） 
    // 而实际情况中 需要根据不同的路由跳转不同页面 使用switch case来解决
    // 但vue使用的不是swich case
    // 其实也就是router.js中的配置
}).listen(3000)

console.log('server start')