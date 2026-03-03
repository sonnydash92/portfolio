/*const moyenne = function (notes) {
    let sum = 0
    for(let note of notes){
        sum = sum + note
    }
    return sum / notes.length
}

class Student {
    _notes = []
    ecole = "Jules  ferry"
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    set notes(v) {
        if (Array.isArray(v)) {
            this._notes = v
        }
        else{
            console.log('error')
        }
    }

    get name() {
        return `${this.firstName} ${this.lastName}`
    }

    canPass() {
        if (moyenne(this._notes) >= 12) {
            console.log(`${this.firstName} ${this.lastName} can pass`)
        }
        else {
            console.log(`${this.firstName} ${this.lastName} can't pass`)
        }
    }

}



const John = new Student('John', 'Doe')
const Jane = new Student('Jane', 'Doe')
John.notes = [15]
Jane.notes = [15, 18, 20]
John.canPass()
Jane.canPass()

console.log(John.name, Jane)*/

/**
 * @param {number} L
 * @param {number} l
 * @returns {number}
 */
const perimeter = function (L, l) {
    return 2 * (L + l)
}



class Rectangle {
    constructor(L, l) {
        this.Longueur = L
        this.lageur = l
    }
    get perimeter() {
        return perimeter(this.Longueur, this.lageur)
    }
    get isValid() {
        return this.Longueur > 0 && this.lageur > 0
    }

    isBiggerThan(){
        return r.perimeter > c.perimeter
    }

}

class Square extends Rectangle {
    constructor(L) {
        super(L, L)
    }

}

const r = new Rectangle(10, 20);
console.log(r.perimeter)// 60
console.log(r.isValid) // true
const r2 = new Rectangle(-10, 20);
console.log(r2.isValid) // false

const c = new Square(10);
console.log(c.perimeter)
console.log(r.isBiggerThan(c)) // true

/*class Book {
    #page = 1

    constructor (titre, nbPages) {
        this.titre = titre
        this.nbPages = nbPages
    }

    get page() {
        return this.#page
    }
    nextPage() {
       if(this.#page < this.nbPages){
           this.#page++
       }
       else{
           console.log('fin du livre')
       }
    }
    close() {
        if(this.#page > 1){
            return this.#page = 1
        }
        else{
            console.log('le livre est déjà fermé')
        }

    }
}

const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

class Library extends Book{
    #livres = []
    addBook(book) {
        this.#livres.push(book)
    }
    addBooks(books) {
        for(let book of books){
            this.#livres.push(book)
        }
    }

    findBooksByLetter(letter) {
        return this.#livres.filter(book => book.titre.startsWith(letter))
    }

}



const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('S'))*/