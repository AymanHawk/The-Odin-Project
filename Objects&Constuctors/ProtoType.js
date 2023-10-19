function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayName = function(){
        console.log(name)
    }
}

Player.prototype.sayHello = function(){
    console.log("Generic Player Text Line for ")
}

const player1 = new Player("Jake", "X")
const player2 = new Player("Jim", "O")

Object.getPrototypeOf(player1) === Player.prototype
Object.getPrototypeOf(player2) === Player.prototype

player1.sayHello()

Object.getPrototypeOf(Player.prototype) === Object.prototype
console.log(player1.valueOf()) 

/**
 * Player.prototype would be the generic object all child objects can inherit from
 * Object.prototype is the grandparent object that all objects inherit from
 * Object.prototype has default functions like valueOf() which Player.prototype does NOT have unless specifically defined
 */

function Person(name){
    this.name = name
}

Person.prototype.sayName = function(){
    console.log(`Hello, I'm ${this.name}!`)
}

function Teacher(name, vocation){
    this.name = name
    this.vocation = vocation
}

Teacher.prototype.getVocation = function(){
    console.log(`My vocation is ${this.vocation}`)
}

Object.getPrototypeOf(Teacher.prototype)
// by default this will return Object.prototpye since the prototype for Teacher by default is Object

Object.setPrototypeOf(Teacher.prototype, Person.prototype)
// now 'Teacher' object will inherit from 'Person'
Object.getPrototypeOf(Teacher.prototype)
// now this will return Person as the prototype for Teacher

const History = new Teacher()
History.sayName()