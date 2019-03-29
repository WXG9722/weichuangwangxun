// 第三方模块 upload功能(filename filesize filepath)
// Express(mysql)
var http = require('http')
var url = require('url')
var fs = require('fs')
var util = require('util')
var path = require('path')
var formidable = require('formidable')

http.createServer((req, res)=>{
    // 拿到响应路径
    var pathname = url.parse(req.url).pathname
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/upload':
            goUpload(req, res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end('404 not found');
    }
}).listen(3000)

console.log('start server');

function goIndex(res){
    var realpath = __dirname+'/module/'+url.parse('upload.html').pathname
    var file = fs.readFileSync(realpath, 'utf-8')
    res.writeHead(200, {'Content-type':'text/html'})
    res.end(file)
}

function goUpload(req, res){
    // 采用第三方包formidable
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    var uploadPath = path.join(__dirname, 'upload')
    form.uploadDir = uploadPath;
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
 
    return;
}