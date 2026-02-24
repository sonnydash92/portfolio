
// jeu de hazard

/*let randomNumber = function(min, max){
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil);
}

const guess = randomNumber(1, 10)


function isRight(n){
    return n === guess;
}


for (let i = 0; i < 3; i++) {
    let numberPlayer = parseInt(prompt("Enter your number"))



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
            console.log("You lose, the number is" +""+ guess)
        }
        else if (numberPlayer > guess){
            console.log("Too high")
        }
        else {
            console.log("Too low")
        }
    }


}*/

// Calcul des nombres premier

/*let numbers = [ 0, 1, 2, 3, 11, 12,13,14, 15, 16,31]

isPremier = (n) => {

    if(n < 2){
        return false
    }

    for (let i = n - 1; i > 1; i--)
    {
        if(n % i === 0){
            return false
        }

    }
    return true

}


const print = (numbers) => {
    for (let i = 0; i <= numbers.length - 1; i++) {
        console.log(`le nombre ${numbers[i]} est-il premier? ${isPremier(numbers[i])}`)
    }
}
print(numbers)*/

//Palindrome

/*let mots = ["racecar", "SOS", "Bonjour"]

for (let mot of mots) {
   let isPalindrome = (str) => {
        return str.toUpperCase() === str.split("").reverse().join("").toUpperCase()
    }
    console.log(`le mot ${mot} est un palindrome? ${isPalindrome(mot)}`)
}*/

//Moyenne

/*const students = [
    {
        name: 'John',
        notes: [1, 20, 18, 19, 12]
    },
    {
        name: 'Jane',
        notes: [17, 18, 20, 13, 15]
    },
    {
        name: 'Sophie',
        notes: [17, 12, 14, 15, 13]
    },
    {
        name: 'Marc',
        notes: [2, 3, 5, 8, 9]
    },
    {
        name: 'Manon',
        notes: [18, 17, 18, 19, 12]
    }
]

let moyenne = (notes) => {
    for (let student of students) {
        let sum = 0;
        for (let note of student.notes) {
            sum += note;
        }
        student.moyenne = sum / student.notes.length

        console.log(student)

        console.log(`${student.name} a une moyenne de ${sum / student.notes.length}`)
    }
}

moyenne(students)
console.log(students.sort((a, b) => b.moyenne - a.moyenne))*/

// Calcul de fréquence


const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`


let newPhrase = phrase.replaceAll(/[(),?:.]|\.{3}/g, '').toLowerCase()

let tableMot = newPhrase.split(" ")

console.log(tableMot)