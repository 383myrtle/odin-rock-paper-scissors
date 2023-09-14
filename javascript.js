const options = ["Rock","Paper","Scissors"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return options[getRandomInt(3)]
}

function playRound(playerSelection, computerSelection){
    let pl = playerSelection.slice(0,1).toUpperCase().concat("",playerSelection.slice(1)) //convert player selection to title case
    let com = computerSelection //computer selection already in title case

    if (options.indexOf(pl)==-1){
        return "Please enter a valid option"
    }
    if (pl==com){
        return `It's a draw! You both threw ${com}`
    }

    let plIndex = options.indexOf(pl)
    if (options.indexOf(com)==(plIndex+1)%3){
        return `You lose :( you threw ${pl} while the computer threw ${com}`
    }
    else{
        return `You win! You threw ${pl} while the computer threw ${com}`
    }
}