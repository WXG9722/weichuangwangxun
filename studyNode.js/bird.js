var util = require('util')
var Animal = require('./animal.js')

function Bird(){
    Animal.call(this)
    util.inherits(Bird, Animal)
    this.say = function(){
        console.log('zhizhi')
    }
}

module.exports = Bird