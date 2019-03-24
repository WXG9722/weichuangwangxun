// dns解析
// robot.txt 是为了避免爬虫获取数据 在url后面加一个这个 我们可以就看到他禁止了哪些网站的爬虫
var dns = require('dns')

dns.resolve('www.qq.com', (err, address)=>{
    if(err){
        console.log(err)
    }else{
        console.log(address)
    }
})