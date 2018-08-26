const notes =[{},
    {
        title: 'My next trip',
        body: 'I would like to go spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Eating ,exersice'
    },
    {
        title: 'My Fav Food',
        body: 'I would like eat new'
    }
]



const findNote = function(notes,noteTitle){
    const index = notes.findIndex(function (note,index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
 
        
    })
    return notes[index]

}
const note = findNote(notes,"My Fav Food")
console.log(note)

//console.log(notes.length)
//console.log(notes)
//console.log(notes.indexOf({}))

//const index = notes.findIndex(function (note,index) {
 //   return note.title === 'Habbits to work on'
    
//})
//console.log(index)