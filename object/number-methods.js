let num=109.765
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min)) + min
console.log(randomNum)



//challenge area
let min1 = 1
let max1 = 5
let randomNum1 = Math.floor(Math.random() * (max1 - min1)) + min1
let makeGuess = function (guess) {
    return guess===randomNum1
}
console.log(makeGuess(1))
