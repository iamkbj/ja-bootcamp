// const notes = [{
//     title: 'my next trip'
//     body: 'Iwould like to go to Spain'
// },{
//     title:'Habbits to work on'
//     body:
// },{
//     title:
//     body:
// }]
// console.log('This is from a different file')

//Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function(p){
    p.textContent = '********'
    //p.remove()
//    console.log(p.textContent)
})

// Add a new element 
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)