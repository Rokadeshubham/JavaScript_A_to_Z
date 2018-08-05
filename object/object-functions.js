let myBook = {
    title: '1984',
    author: 'George',
    pageCount: 326
}

let otherBook = {
    title: 'A people history',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummery = function (book) {
    return {
        summery: `${book.title} by ${book.author}`,
        pageCountSummery:`${book.title} is ${book.pageCount} pages long`
    }
    
}
let firstbook = getSummery(myBook)
let secondbook = getSummery(otherBook)

console.log(firstbook.pageCountSummery)
console.log(secondbook.summery)

//challenge area

let temp = function (fahrenheit) {
    
    
    return{
        fahrenheit:fahrenheit,
        celsius: (fahrenheit - 32) * 5 / 9,
     kelvin: (fahrenheit + 459.67) * 5 / 9
    }
    
}
let conversion = temp(74)
console.log(conversion)