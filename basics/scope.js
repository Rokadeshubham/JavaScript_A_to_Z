
//global scope(varOne)
    //local scope(varTwo)
    //local scope(varFour)
    //local scope(varFour)
let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'

    if (true) {
        let varFour = 'varFour'
    }
}

if(true){
    let varThree = 'varThree'
}

console.log(varTwo)