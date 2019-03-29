var util = require('util')
var Animal = require('./animal.js')

function Duck(){
    Animal.call(this)
    this.say = function(){
        console.log('gaga')
    }
}
util.inherits(Duck, Animal)

var duck = new Duck()

module.exports = duck