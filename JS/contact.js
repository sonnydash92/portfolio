let randomNumber = function(min, max){
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}

const guess = randomNumber(1, 10)

function isRight(n){
    if (n === guess) {
        return true
    }
    else if (n > guess) {
        return false
    }
    else {
        return false
    }
}


for (let i = 0; i < 3; i++) {
    let numberPlayer = prompt("Enter your number")*1
    if (isRight(numberPlayer)) {
        console.log("You win!")
        break
    }
    else if (!isRight(numberPlayer)) {
        if (numberPlayer > guess){
            console.log("Too high")
        }
        else if (numberPlayer < guess){
            console.log("Too low")
        }
        else if (i === 2)  {
            console.log("You lose, the number is " + guess)
        }
    }


}












