// 手动实现EventEmitter
// on监听事件 emit触发事件
class EventEmitter{
    constructor(){
        this.handler = {}
    }
    on(eventName, callback){
        if(!this.handles){
            this.handles = {}
        }
        if(!this.handles[eventName]){
            this.handles[eventName] = []
        }
        this.handles[eventName].push(callback)
    }
    emit(eventName, ...args){
        if(this.handles[eventName]){
            for(let i=0; i<this.handles[eventName].length; i++){
                this.handles[eventName][i](...args)
            }
        }
    }
}
EventEmitter.prototype.addListener = EventEmitter.prototype.on

let event = new EventEmitter()
event.addListener('say', function(str){
    console.log(str)
})
event.emit('say','haha')