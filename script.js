

const computerScoreValue = document.getElementById("computerScoreValue");
const yourScoreValue = document.getElementById("yourScoreValue");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

const rock2 = document.getElementById("rock2");
const scissors2 = document.getElementById("scissors2");
const paper2 = document.getElementById("paper2");
const rock3 = document.getElementById("rock3");
const scissors3 = document.getElementById("scissors3");
const paper3 = document.getElementById("paper3");

const rock4 = document.getElementById("rock4");
const scissors4 = document.getElementById("scissors4");
const paper4 = document.getElementById("paper4");
const rock5 = document.getElementById("rock5");
const scissors5 = document.getElementById("scissors5");
const paper5 = document.getElementById("paper5");

const rpsCenter = document.getElementById("rpsCenter");

const win = document.getElementById("win");
const youWin = document.getElementById("youWin");
const lost = document.getElementById("lost");
const youLost = document.getElementById("youLost");
const tie = document.getElementById("tie");
const tieUp = document.getElementById("tieUp");
const playAgain = document.getElementById("playAgain");
const replay = document.getElementById("replay");

const rulesButton = document.getElementById("rulesButton");
const gameRules = document.getElementById("gameRules")
const backButton = document.getElementById("backButton");

const choices= ["rock","paper","scissors"]
let random = Math.floor(Math.random() * choices.length);


 
let playerChoice;
let computerChoice;
let playerScore;
let computerScore;
let computerChoiceWon;
let computerChoiceLost;
let playerChoiceWon;
let playerChoiceLost;

playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
yourScoreValue.textContent = playerScore;
computerScoreValue.textContent = computerScore;
// alert(choices[random]);
// alert(random)

function showGameRules() {
    gameRules.classList.remove("hidden");
    gameRules.classList.add("visible");
}

function hideGameRules() {
    gameRules.classList.remove("visible");
    gameRules.classList.add("hidden");
}

rulesButton.addEventListener("click", () => {
    showGameRules();
});

backButton.addEventListener("click", () => {
    hideGameRules();
});

function showCircles() {
    rpsCenter.classList.remove("hidden");
    rpsCenter.classList.add("visible");
}

function hideCircles() {
    rpsCenter.classList.remove("visible");
    rpsCenter.classList.add("hidden");
}


function showGameAreaPCWon(computerChoice) {
    if (computerChoice == "rock") {
        computerChoiceWon = rock2;
    } else if (computerChoice == "paper") {
        computerChoiceWon = paper2;
    } else if (computerChoice == "scissors") {
        computerChoiceWon= scissors2;
    }

    computerChoiceWon.style.display = 'flex';
}

function hideGameAreaPCWon(computerChoice) {
    if (computerChoice == "rock") {
        computerChoiceWon = rock2;
    } else if (computerChoice == "paper") {
        computerChoiceWon = paper2;
    } else if (computerChoice == "scissors") {
        computerChoiceWon = scissors2;
    }

    computerChoiceWon.style.display = 'none';

}

function showGameAreaPlayerWon(playerChoice) {
    if (playerChoice == "rock") {
        playerChoiceWon= rock3;
    } else if (playerChoice == "paper") {
        playerChoiceWon = paper3;
    } else if (playerChoice == "scissors") {
        playerChoiceWon = scissors3;
    }

    playerChoiceWon.style.display = 'flex';

}

function hideGameAreaPlayerWon(playerChoice) {
    if (playerChoice == "rock") {
        playerChoiceWon= rock3;
    } else if (playerChoice == "paper") {
        playerChoiceWon = paper3;
    } else if (playerChoice == "scissors") {
        playerChoiceWon = scissors3;
    }
    playerChoiceWon.style.display = 'none';

}


function showGameAreaPCLost(computerChoice) {
    if (computerChoice == "rock") {
        computerChoiceLost = rock4;
    } else if (computerChoice == "paper") {
        computerChoiceLost = paper4;
    } else if (computerChoice == "scissors") {
        computerChoiceLost = scissors4;
    }

    computerChoiceLost.style.display = 'flex';

}

function hideGameAreaPCLost(computerChoice) {
    if (computerChoice == "rock") {
        computerChoiceLost = rock4;
    } else if (computerChoice == "paper") {
        computerChoiceLost = paper4;
    } else if (computerChoice == "scissors") {
        computerChoiceLost = scissors4;
    }
    computerChoiceLost.style.display = 'none';

}

function showGameAreaPlayerLost(playerChoice) {
    if (playerChoice == "rock") {
        playerChoiceLost = rock5;
    } else if (playerChoice == "paper") {
        playerChoiceLost = paper5;
    } else if (playerChoice == "scissors") {
        playerChoiceLost = scissors5;
    }

    playerChoiceLost.style.display = 'flex';

}

function hideGameAreaPlayerLost(playerChoice) {
    if (playerChoice == "rock") {
        playerChoiceLost = rock5;
    } else if (playerChoice == "paper") {
        playerChoiceLost = paper5;
    } else if (playerChoice == "scissors") {
        playerChoiceLost = scissors5;
    }
    playerChoiceLost.style.display = 'none';

}








let choiceMap = new Map([
    ["rock,rock", "tie"],
    ["paper,paper", "tie"],
    ["scissors,scissors", "tie"],
    ["rock,scissors", "Comp_Won"],
    ["paper,rock", "Comp_Won"],
    ["scissors,paper", "Comp_Won"],
    ["scissors,rock", "Player_Won"],
    ["rock,paper", "Player_Won"],
    ["paper,scissors", "Player_Won"]
]);



function test(playerChoice, computerChoice) {
    const key = `${playerChoice},${computerChoice}`;
    return choiceMap.get(key) || "tie";
}


function updateScores(result) {


    if (result === "Player_Won") {
        playerScore++;
        yourScoreValue.textContent = playerScore;
    } else if (result === "Comp_Won") {
        computerScore++;
        computerScoreValue.textContent = computerScore;
    }

    
    localStorage.setItem("playerScore", playerScore);
    localStorage.setItem("computerScore", computerScore);

}

function showResultMessage(result) {

    if (result === "Player_Won") {
        win.style.display = 'flex';
        playAgain.style.display = 'flex';
    } else if (result === "Comp_Won") {
        lost.style.display = 'flex';
        playAgain.style.display = 'flex';
    } else if (result === "tie") {
        tie.style.display = 'flex';
        replay.style.display = 'flex';
    }

}

// function resetGame() {
//     playerChoice = undefined;
//     computerChoice = undefined;
//     hideGameAreaPCWon(computerChoice);
//     hideGameAreaPCLost(computerChoice);
//     hideGameAreaPlayerWon(playerChoice);
//     hideGameAreaPlayerLost(playerChoice);
        

//     win.style.display = 'none';
//     lost.style.display = 'none';
//     tie.style.display = 'none';
//     playAgain.style.display = 'none';
//     replay.style.display = 'none';

//     showCircles();

//     alert("Game iss reset.");
// }
function resetGame() {

    playerChoice = undefined;
    computerChoice = undefined;

 
    const elementsToHide = [
        win, lost, tie, playAgain, replay,
        rock2, paper2, scissors2,
        rock3, paper3, scissors3, 
        rock4, paper4, scissors4,
        rock5, paper5, scissors5 
    ];

    elementsToHide.forEach(element => {
        if (element) {
            element.style.display = 'none';
        }
    });


    yourScoreValue.textContent = playerScore;
    computerScoreValue.textContent = computerScore;

  
    if (rpsCenter) {
        rpsCenter.classList.remove('hidden');
        rpsCenter.classList.add('visible');
    }

    console.log("Game reseted");
}

function playRound(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = choiceMap.get(`${playerChoice},${computerChoice}`) || "tie";
    if( result == "Player_Won"){
        hideCircles();
        showGameAreaPlayerWon(playerChoice);
        showGameAreaPCLost(computerChoice);
    }
    else if (result == "Comp_Won") {
        hideCircles();
        showGameAreaPlayerLost(playerChoice);
        showGameAreaPCWon(computerChoice);
    } else {
        hideCircles();
        showGameAreaPlayerLost(playerChoice);
        showGameAreaPCLost(computerChoice);
    }
    updateScores(result);
    showResultMessage(result);
   
}

rock.addEventListener("click", () => {
    playerChoice = "rock";
    playRound(playerChoice);
});

scissors.addEventListener("click", () => {
    playerChoice = "scissors";
    playRound(playerChoice);
});

paper.addEventListener("click", () => {
    playerChoice = "paper";
    playRound(playerChoice);
});

playAgain.addEventListener("click", () => {
    resetGame();
});

replay.addEventListener("click", () => {
    resetGame()
});


// console.log(choiceMap.get("rock,scissors"));













