const todo = ['todo1', 'todo2', 'todo3', 'todo4', 'todo5']

//Delete the 3rd item
todo.splice(2,1)
//add item to end
todo.push('i am new')
//remove first item
todo.shift()


console.log(todo.length)
console.log(`You have ${todo.length} todos`)
console.log(todo)

todo.forEach(function(item,index){
        const num = index + 1
        console.log(`${num}. ${item}`)
})

//items in order

for(let cnt = 0; cnt< todo.length; cnt++){
        console.log(todo[cnt])
}

