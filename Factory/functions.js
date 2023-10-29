const name = "Bob"
const age = 28
const color = "red"

const thatObject = { name: name, age: age, color: color }

const nowFancyObject = { name, age, color }

thatObject.name = "Frank"
thatObject.age = 38
thatObject.color = "Pink"

const obj = { a: 1, b: 2 }
const { a, b } = obj

const array = [1, 2, 3, 4, 5]
const [zerothEle, firstEle] = array

console.log(array)

function createUser(name){
    const discordName = "@" + name
    let reputation = 0;
    const getReputation = () => reputation
    const giveReputation = () => reputation++

    return {name, discordName, getReputation, giveReputation}
}

const josh = createUser("josh")
console.log(josh.getReputation())
josh.giveReputation()
josh.giveReputation()
josh.giveReputation()
console.log(josh.getReputation())

// function createPlayer(name, level){
//     const { discordName, getReputation} = createUser(name)

//     const increaseLevel = () => level++
//     return {name, discordName, getReputation, increaseLevel}
// }

function createPlayer(name, level){
    const user = createUser(name) //extendes the create user class...

    const increaseLevel = () => level++

    return Object.assign({}, user, {increaseLevel})
}

console.log(createPlayer("Roberto", 4))

const calculator = (function (){
    const add = (a, b) => a + b
    const sub = (a, b) => a - b
    const mult = (a, b) => a * b
    const div = (a, b) => a / b
    return {add, sub, mult, div}
})();

console.log(calculator.add(1, 2))
console.log(calculator.sub(44, 2))
console.log(calculator.mult(5, 36))