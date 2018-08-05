let temp = 165

//logical AND true if both sides is true
if(temp >= 60 && temp <=90){
    console.log('It is pretty nice out ')

}

if(temp<=0 || temp>=120 ){
    console.log('It is dangerous togo outside')

}


//challenge
let isGuestOneVegan = true
let isGuestTwoVegan = false
if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes.')

}else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer somr vegan options')
}
else{
    console.log('Offer up anything the mwnu')
}