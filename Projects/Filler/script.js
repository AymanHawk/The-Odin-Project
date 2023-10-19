function favoriteAnimal(){
    console.log("animal");
}

function addSeven(){
    const inputElement = document.getElementById("inputNumber");
    const inputValue = parseInt(inputElement.value);

    if(!isNaN(inputValue)){
        const result = inputValue + 7;
        const resultElement = document.getElementById("result");
        resultElement.textContent = `Result: ${result}`;
    }else{
        alert("Enter A Valid Number")
    }
}

function multiplyTwo(){
    const inputElement = document.getElementById("inputNumber");
    const inputValue = parseInt(inputElement.value);

    if(!isNaN(inputValue)){
        const result = inputValue * 2;
        const resultElement = document.getElementById("result")
        resultElement.textContent = `Result: ${result}`;
    }
}

function capitalize(){
    const inputElement = document.getElementById("inputText");
    const inputValue = inputElement.value;
    
    const uppCasedValue = inputValue.toUpperCase();
    const resultElement = document.getElementById("resultText")
    resultElement.textContent = `Result: ${uppCasedValue}`;
}

function lastLetter(){
    const inputElement = document.getElementById("lastLetterString");
    const inputValue = inputElement.value;

    const lastLetterValue = inputValue.charAt(inputValue.length - 1);
    const resultElement = document.getElementById("resultChar");
    resultElement.textContent = `Result: ${lastLetterValue}`
}
