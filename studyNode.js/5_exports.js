// function Demo(){
//     this.name = 'laoshan';
//     this.bb = function(){
//         console.log(this.name)
//     }
// }
// module.exports = Demo;

// exports只能把对象暴露 module.exports可以把类 对象 数组暴露
// module.exports和exports的区别
// 以下三者 第一个暴露出一个对象 第二个是一个空对象 第三个是一个对象
// 原因 exports指向的是module.exports的地址引用
// 但第二个之所以是空 是因为直接赋值exports一个对象 改变了exports的指向
// require的时候 是找module.exports的地址 但是第二种已经改变了引用发现没有 所以就是空
// module.exports = {
//     bb: function(){
//         console.log('haha')
//     }
// }
// exports = {
//     bb: function(){
//         console.log('haha')
//     }
// }
// exports.bb = function(){
//     console.log('haha')
// }
// 这好比
// var obj = {
//     a: 123
// }
// obj.a = 456 // 这就是exports.bb 不改变obj的引用
// obj = 789 // 这就是export 改变了obj的引用