let userChoice = "";

function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    if(choice === 1){
        return "rock"
    }else if(choice === 2){
        return "paper"
    }else if(choice === 3){
        return "scissors"
    }
}

function choseRock(){
    userChoice = 'rock';
}

function chosePaper(){
    userChoice = 'paper';
}

function choseScissors(){
    userChoice ='scissors';
}

function getPlayerChoice(){
    const choice = userChoice;
    console.log("Player's Choice: " + choice);
    return choice
}

function playRound(){
    console.log("Round started");
    const computer = getComputerChoice();
    const player = getPlayerChoice();
    console.log(computer + " vs " + player);

    let result = "";

    if(player === computer){
        result = ("Draw, Same Choice !");
    }else if(computer === "scissors" && player === "rock"){
        result = (`You Win -> Computer Chose ${computer}` );
    }else if(computer === "rock" && player === "paper"){
        result = (`You Win -> Computer Chose ${computer}` );
    }else if(computer === "paper" && player === "scissors"){
        result = (`You Win -> Computer Chose ${computer}` );
    }else if(computer === "scissors" && player === "paper"){
        result = (`You Lose -> Computer Chose ${computer}` );
    }else if(computer === "paper" && player === "rock"){
        result = (`You Lose -> Computer Chose ${computer}` );
    }else if(computer === "rock" && player === "scissors"){
        result = (`You Lose -> Computer Chose ${computer}` );
    }

    console.log(result);

    const decision = document.getElementById("resultz");
    
    decision.textContent = result;
}
