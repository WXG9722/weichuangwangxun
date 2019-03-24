function Person(){
    this.think = function(callback){
        console.log('I am thinking ...')
        setTimeout(function(){
            callback()
        }, 5000)
    }
    this.answer = function(){
        console.log('I am answering other question')
    }
}

var person = new Person()
person.think(function(){
    console.log('thinking 5 seconds and I get the answer')
});
person.answer();