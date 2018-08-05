let add = function (a,b) {
    return a+b
}

let result = add(10,1)
console.log(result)

//Defualt Arguments
let getScoreText = function (name , score){
    console.log(name)
    console.log(score)
}

//challenge(Template string)

let getTip = function (total , tipPercent = .25) {
    let percent= tipPercent *100
    let tip = total * tipPercent
    return `A ${percent}% tip on ${total} would be ${tip}` 
    
}
let tip = getTip(40,.25)
console.log(tip)



