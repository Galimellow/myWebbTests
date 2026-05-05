const userDisplay = document.getElementById("userDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const choices = ["rock", "paper", "scissors"];

const userScoreDisplay = document.getElementById("userScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let userScore = 0;
let computerScore = 0;
userScoreDisplay.textContent =  userScore;
computerScoreDisplay.textContent = computerScore;

userScoreDisplay.classList.add("colorGreen");
computerScoreDisplay.classList.add("colorRed");

function game(userChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result;

    userDisplay.textContent = `Your choice: ${userChoice}`;
    computerDisplay.textContent = `Computer choice: ${computerChoice}`;


    if(computerChoice === userChoice) result = "TIE";
    else{
        switch(userChoice)
        {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("colorGreen", "colorRed");
    switch(result)
    {
        case "YOU WIN":
            resultDisplay.classList.add("colorGreen");
            userScore++;
            break;
        case "YOU LOSE":
            resultDisplay.classList.add("colorRed");
            computerScore++;
            break;
    }
    userScoreDisplay.textContent =  userScore;
    computerScoreDisplay.textContent = computerScore;
}


const movingBox = document.getElementById("movingBox");
const moveAmount = 10;
let x=0, y=0;

function move(direction){
    event.preventDefault();
    
    switch(direction){
        case `u`: 
            y -= moveAmount;
            break;
        case `d`: 
            y += moveAmount;
            break;
        case `l`: 
            x -= moveAmount;
            break;
        case `r`: 
            x += moveAmount;
            break;
    }
    
    movingBox.style.top = `${y}px`;
    movingBox.style.left = `${x}px`;
}
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow"))
    {
        event.preventDefault();

        movingBox.textContent = "😆";
        movingBox.style.backgroundColor = "hsl(120, 48%, 59%)";
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
        }

        movingBox.style.top = `${y}px`;
        movingBox.style.left = `${x}px`;
    }
});
document.addEventListener("keyup", event => {
    movingBox.textContent = "😊";
    movingBox.style.backgroundColor = "hsl(120, 85%, 34%)";
}); 
