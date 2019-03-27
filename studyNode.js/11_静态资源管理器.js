// 静态资源管理器 反复看
// 这里只是简单实现 mime有409种 用这种方式复杂度很高
// 实际上是使用hash map 一种映射的方式来写
// 其实不仅仅是这一个例子 实际开发中经常会遇到这种情况 例如显示省市县
// 此时用三层for循环可以实现 但复杂度太高性能太差
// 这种情况 好的排序算法就显得尤为重要
var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer((req, res)=>{
    var pathname = url.parse(req.url).pathname;
    var realpath = __dirname+'/module'+pathname;
    if(pathname == '/favicon.ico'){
        return;
    }else if(pathname == '/'){
        goIndex(res);
    }else{
        dealWithStatic(pathname, realpath, res)
    }
}).listen(80,'127.0.0.1')

console.log('start server')

function goIndex(res){
    var pathname = __dirname+'/module/'+url.parse('index2.html').pathname
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(fs.readFileSync(pathname), 'utf-8')
}

function dealWithStatic(pathname, realpath, res){
    // realpath可以显示index2.html的所有关联路径
    // console.log(realpath)
    fs.open(realpath, 'r', function(err, fd){
        if(err){
            if(err.code === 'ENOENT'){
                console.error(pathname + '不存在');
                res.writeHead(404, {'Contetn-type':'text/plain'})
                res.end()
                return;
            }
            throw err
        }else{
            var pointPosition = pathname.lastIndexOf('.')
            var mimeString = pathname.substring(pointPosition+1)
            var mimeType
            switch(mimeString){
                case 'css':
                    mimeType = 'text/css';
                    break;
                case 'jpg':
                    mimeType = 'text/jpeg';
                    break;
                default:
                    mimeType = 'text/plain';
                    break;
            }
        }
        fs.readFile(realpath, 'binary', function(err, file){
            if(err){
                res.writeHead(500, {'Content-type':'text/plain'})
                res.end(err)
            }else{
                res.writeHead(200, {'Content-type':mimeType})
                res.write(file, 'binary')
                res.end()
            }
        })
    })
}