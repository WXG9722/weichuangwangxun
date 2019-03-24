// 异步回调
function lunch(food, drink, callback){
    console.log('dating lunch of ' + food + ', ' + drink + '.');
    if(callback && typeof callback === 'function'){
        setTimeout(function(){
            callback();
        }, 5000);
    }
}
lunch('toast', 'coffe', function(){
    console.log('finish');
})
// 同步回调
function waitFive(name, callback){
    callback(name);
    var pus = 0;
    var current = new Date();
    while(pus <= 5000){
        let now = new Date();
        pus =  now - current;
    }
    
}
function echo(name){
    console.log(name);
}
waitFive('laoshan', echo);
console.log('its over')
