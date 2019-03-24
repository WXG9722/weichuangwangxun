// 比较加载速度
var http = require('http')
url = ['www.baidu.com', 'www.qq.com', 'www.sohu.com'];

function fetchPage(url){
    var start = new Date();
    http.get({'host': url}, (res)=>{
        console.log('Get Response from ' + url);
        console.log('Request took: '+(new Date() - start)+' ms')
    })
}

for(let i=0; i<url.length; i++){
    fetchPage(url[i]);
}