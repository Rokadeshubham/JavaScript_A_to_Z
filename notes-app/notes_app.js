const  notes = [{
    title:'my next trip',
    body:'I would like to go to Spain'
},{
    title:'Habbits to work on',
    body:'Exercise. Eating a bit better'
},{
    title:'Office modification',
    body:'Get a new seat'
}]


// let newPara = document.createElement('p')
// newPara.textContent = 'This is a new para from JS'
// document.querySelector('body').appendChild(newPara)
//
//
//
// let newHead = document.createElement('H1')
// newHead.textContent = 'I am from java script'
// document.querySelector('body').appendChild(newHead)
//
//
// const para = document.createElement('p')
// para.textContent = 'This is new from JS'
// document.querySelector('body').appendChild(para)





// document.querySelector('button').addEventListener('click',function (e) {
//     e.target.textContent = 'Buttom was clicked'
//
// })
//
// document.querySelectorAll('button')[1].addEventListener('click',function () {
//     console.log('Delete all notes')
// })


const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}
renderNotes(notes, filters)


//ID Select
document.querySelector('#create-note').addEventListener('click',function (e) {
    e.target.textContent = 'Buttom was clicked'
 })

document.querySelector('#remove-all').addEventListener('click',function () {
     console.log('Delete all notes')
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })})


// document.querySelector('#search-text').addEventListener('change',function (c) {
//     console.log(c.target.value)
// })

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

//Form
document.querySelector('#name-form').addEventListener('submit',function (e) {
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value = ''
})

// document.querySelector('#for-fun').addEventListener('change',function (e) {
//     console.log(e.target.checked)
// })

document.querySelector('#filter-by').addEventListener('change',function (e) {
    console.log(e.target.value)
})



