let myBook = {
    title: '1984',
    author: 'George',
    pageCount: 326
}
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)

//challenge area

let person = {
    name : 'Ethan',
    age : 50,
    location : 'USA'
}

console.log(`${person.name} is ${person.age} and live in ${person.location}`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} and live in ${person.location}`)