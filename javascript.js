const options = ["Rock","Paper","Scissors"]
let winsPlayer = 0
let winsComputer = 0

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return options[getRandomInt(3)]
}

function playRound(playerSelection, computerSelection){
    let pl = playerSelection.slice(0,1).toUpperCase().concat("",playerSelection.slice(1).toLowerCase()) //convert player selection to title case
    let com = computerSelection //computer selection already in title case

    if (options.indexOf(pl)==-1){
        return "Please enter a valid option"
    }
    if (pl==com){
        return `It's a draw! You both threw ${com}`
    }

    let plIndex = options.indexOf(pl)
    if (options.indexOf(com)==(plIndex+1)%3){
        winsComputer++
        return `You lose :( you threw ${pl} while the computer threw ${com}`
    }
    else{
        winsPlayer++
        return `You win! You threw ${pl} while the computer threw ${com}`
    }
}
/**
function game(){
    let playerSelection

    while (true){
        if (winsPlayer==5){
            console.log("You win, a score of 5 was reached by you.")
            break
        }
        else if (winsComputer==5){
            console.log("You lose, a score of 5 was reached by the computer.")
            break
        }

        playerSelection = prompt('Enter "Rock", "Paper", or "Scissors"')
        console.log(playRound(playerSelection,getComputerChoice()))
    }
}**/
let playerSelection = ''
let rockBtn = document.createElement('button')
let scissorsBtn = document.createElement('button')
let paperBtn = document.createElement('button')
let body = document.querySelector('body')

rockBtn.setAttribute('id','Rock')
rockBtn.textContent = "Rock"
scissorsBtn.setAttribute('id','Scissors')
scissorsBtn.textContent = "Scissors"
paperBtn.setAttribute('id','Paper')
paperBtn.textContent = "Paper"

body.appendChild(rockBtn)
body.appendChild(scissorsBtn)
body.appendChild(paperBtn)

rockBtn.addEventListener('click', play)
paperBtn.addEventListener('click', play)
scissorsBtn.addEventListener('click', play)


function play(e) {
    playerSelection = e.target.getAttribute('id')
    console.log(playRound(playerSelection, getComputerChoice()))
}
