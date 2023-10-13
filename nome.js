

function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    // console.log(number);
    switch (number){
        case 0:
            return "Rock";
            breack;

        case 1:
              return "Paper";
              breack;
        case 2:
              return "Scissors";
              breack;
    }
    // return "errooou"
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "Tie, Player: "+ playerSelection + " Computer: " + computerSelection;

    }else if((playerSelection=="rock"&&computerSelection=="scissors")   ||
             (playerSelection=="scissors"&&computerSelection=="paper")  ||
             (playerSelection=="paper"&&computerSelection=="rock"))     {
        return "player wins with " + playerSelection + " against computer " + computerSelection;   
    }else {
        return "computer wins with " + computerSelection + " against computer " + playerSelection;
    }
}

function game(){
    const playerSelection = prompt("Rock, paper or scissors?");
    const computerSelection = getComputerChoice();
    
    return playRound(playerSelection,computerSelection);

}

for (let i=0; i<5; i++){
    console.log(i);
    console.log(game());
}



// console.log(getComputerChoice())