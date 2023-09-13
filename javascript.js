const options = ["Rock","Paper","Scissors"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return options[getRandomInt(3)]
}

