let greetUser = function () {
    console.log('Welcome User')   
}

greetUser()



let square = function (num) {
    let result = num*num
    return result
    
}
let value = square(5)
let otherValue = square(9)

console.log(value)
console.log(otherValue)


//Challenge Area
//fahrenheit to celcius
let convert = function celsius (fahrenheight) {

    let celsius = (fahrenheight - 32) * 5 /9
    return celsius
}
let cel_value = convert(32)
let cel_value1 = convert(68)
console.log(cel_value)
console.log(cel_value1)