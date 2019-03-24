var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end('<h2>hello world</h2>');
}).listen(3000);

console.log('server start');

// 码制 两者必须一致 否则乱码
// 文件编码 ANSI Unicode UTF-8
// 浏览器解码 GBK/GB18030/GB2312 UTF-8
// 服务器传文件 需要告诉浏览器文件类型和解码方式
// http协议四大关键字 get post put delete
// get有长度限制4096（内存缓冲） post没有限制 curl可实现无页面的时候get post提交
// setcookie('name', 'value', 'time') 有时候我们会见到等几秒之后跳转页面 这是因为写缓存是需要时间的 磁盘io是比较慢的 如果不等待几秒直接跳转 会无法读取到这个缓存那么还是会显示未登录
// 不写时间 关闭页面就消失
// 'text/html'称为MIME