var util = require('util')
var events = require('events')

// 继承
function MyStream(){
    events.EventEmitter.call(this);
}

util.inherits(MyStream, events.EventEmitter)
MyStream.prototype.write = function(data){
    this.emit('data', data)
}

var stream = new MyStream()
stream.on('data', function(data){
    console.log(data)
})
stream.write('It works')