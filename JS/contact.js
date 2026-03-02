
// jeu de hazard
let randomNumber = function(min, max){
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}

const guess = randomNumber(1, 10)

console.log(guess)


function isRight(n){
    return n === guess;
}


for (let i = 0; i < 3; i++) {
    let numberPlayer = parseInt( prompt("Enter your number"))



    while (isNaN(numberPlayer)){
        console.log("Please enter a number")
        numberPlayer = prompt("Enter your number")
    }

    if (isRight(numberPlayer)) {
        console.log("You win!")
        break
    }
    else if (!isRight(numberPlayer)) {
        if (i === 2)  {
            console.log("You lose, the number is" +" "+ guess)
        }
        else if (numberPlayer > guess){
            console.log("Too high")
        }
        else {
            console.log("Too low")
        }
    }


}
