const playerOneName = "Timmy"
const playerTwoName = "Jenny"
const playerOneMarker = "X"
const playerTwoMarker = "O"

const playerOne = {
    name: "Timmy",
    marker: "X"
}

const playerTwo = {
    name: "Jenny",
    marker: "O"
}

function printName(player){
    console.log(player.name);
}

printName(playerOne);

function PlayerObj(name, marker){
    this.name = name
    this.marker = marker
}

const player1 = new PlayerObj('steven', 'X')
console.log(player1.name)

function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayName = function(){
        console.log(name);
    }
}

const Player1 = new Player('Roger', 'A')
const Player2 = new Player('Ingrid', 'F')
Player1.sayName();
Player2.sayName();