// node模块（原生模块 自定义模块 第三方模块）

// node -v
// npm安装
// npm install -g supervisor
// 为了避免每次改代码都需要重启服务（因为js是单进程的） 我们安装这个 他会派生一个子进程 来实现我们不需要重启服务直接刷新页面就可以了

// 原生模块（需要手动加载require 自动加载）
// 自动加载的模块：global module process timer console（常见的）
// global有一个Buffer被称为缓冲区 __dirname取到当前文件路径

// fs文件系统 读文件
const fs = require('fs');
// 同步
// var data = fs.readFileSync('./haha.txt', 'utf-8');
// 异步 先输出end 然后是txt的内容 记住异步不能赋给一个变量
fs.readFile('./haha.txt', 'utf-8', function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
console.log('end');
