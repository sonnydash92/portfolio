/*let randomNumber = function(min, max){
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}

let playerNumber = prompt("Enter your number");


function comparers(playerNumber, randomNumber){
    if(playerNumber === randomNumber){
        console.log("You win");
    }
    else if(playerNumber > randomNumber){
        console.log("Moins");
    }
    else{
        console.log("Plus");
    }
}

while(playerNumber !== randomNumber(1, 10)){
    playerNumber = prompt("Enter your number");
    comparers(playerNumber, randomNumber(1, 10))
    i++
}*/


let listeFilms = ["lilo&Stich", "Matrix", "Evil Dead"]
const year = 2026
let birthday = prompt("Veillez entrer votre datee de naissance")

let age = year - birthday


if (age <= 13){
    console.log(`Vous avez ${age +""+ `ans`}, vous pouvez regarder ${listeFilms[0]}`)
}
else if(age < 18){
    console.log(`Vous avez ${age +""+ `ans`}, vous pouvez regarder ${listeFilms[1]}`)
}
else {
    console.log(`Vous avez ${age +""+ `ans`}, vous pouvez regarder ${listeFilms[2]}`)
}