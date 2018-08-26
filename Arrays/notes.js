const notes = ['Note 1', 'Note 2', 'Note 3']
//notes.pop()
//notes.push('My new notes')  

//console.log(notes.shift())
//notes.unshift('My first note')

//notes.splice(1, 1)//start with 1 and delete one
//notes.splice(1, 0, 'It is new note')//start with 1 and 0 means do nothing

notes.forEach(function () {
    console.log('testing 3')
})

console.log(notes.length)
console.log(notes)

//Counting...1
for(let count = 0; count <=2; count = count + 1){
    console.log(count)
}

for(let count = 0; count < notes.length; count++){
    console.log(notes[count])
}
console.log(notes.indexOf('Note 2'))