// js有些模块是默认加载的 比如console.log
// 但有些不会默认加载 所以需要require
// REPL 是cmd任意路径输入node会出现一个环境 叫做REPL 交互式解释器
// 函数 过程的区别 有return的叫函数 没有的叫过程 return必然是函数的最后一句话

// 解释器 预编译 作用域 上下文
// 异步 同步
// 解释器先扫描同步代码和异步代码
// 然后会把异步代码抛给事件循环
// 满足当前线程空闲并且满足事件队列中异步代码的触发条件时 才会执行异步代码
// 触发条件有磁盘I/O 网络I/O 时间 on addEventListener（事件三要素） emit
// Promise 异步请求用到不可控的第三方API时 常会用到Promise
// for(var i=0; i<=3; i++){
//     console.log(i)
//     setTimeout(function(){
//         console.log(i)
//     },0)
// }
// console.log('end')
// 输出0 1 2 3 end 4 4 4 4
// var start = new Date();

// setTimeout(function(){
//     var end = new Date();
//     console.log(end-start)
// },500)
// while(new Date()-start<1000){

// }
// 输出 1000（或1000以上一点 不同的环境不一样）
// 因为setTimeout满足触发条件时 进程还没有空闲（while正在循环）
// node的作用 中间层 解决高并发问题 新系统替代老系统
// 原因：单进程 异步触发（不会阻塞 所以解决高并发） 事件队列
// require 模块化 exports module.exports
// 全局污染 局部变量调用全局变量 一旦全局变量变化 所有的局部变量都变了 这就是全局污染.