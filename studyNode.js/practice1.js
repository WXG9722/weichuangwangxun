// 读取haha.txt 停2s再结束

var fs = require('fs')

fs.readFile('./haha.txt', 'utf-8', function(err, data){
    if(err){
        console.log(err)
    }else{
        wait(data)
    }
})

function wait(data){
    setTimeout(function(){
        console.log(data)
    }, 2000)
}