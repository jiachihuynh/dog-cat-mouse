var Dog = require('./dog');
var Cat = require('./cat');

var dog = new Dog('Goofy');
var tom = new Cat('Tom');
dog.eat(tom);
console.log(dog);