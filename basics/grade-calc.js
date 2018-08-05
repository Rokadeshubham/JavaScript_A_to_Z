let gradeCal =function (obt_score,total_score) {
    let percent = (obt_score/total_score)*100
    let letterGrade = ''

    if(percent >= 90){
        letterGrade = 'A'

    }
    else if(percent>=80){
        letterGrade = 'B'
    }
    else if(percent>=70){
        letterGrade = 'C'

    }
    else if(percent>=60){
        letterGrade = 'D'
    }
    else{
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} with ${percent}%`
}
let result = gradeCal(17,20)
console.log(result)