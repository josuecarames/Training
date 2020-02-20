const toDos = [{
    title: "Order cat food",
    Status: true
 }, {
    title: "Clean kitchen",
    Status: false
 }, {
    title: "Buy food",
    Status: true
 }, {
    title: "Do work",
    Status: false
 }, {
    title: "Exercise",
    Status: true
 }
]

// const deleteToDos = function (toDos, todoText) {
//     const index = toDos.findIndex(function (toDos){
//         return toDos.title.toLowerCase() === todoText.toLowerCase()
//     })
//     if (index > -1) {
//         toDos.splice(index, 1)
//     }
// }


const deleteToDos = function (toDos, newTitle) {
    const index = toDos.findIndex(function toDos){
        return toDos.title.toLowerCase() === newTitle.toLowerCase()
    })
    if (index > -1) {
        toDos.splice(index, 1)
    }
}

deleteToDos(toDos, 'buy food')
console.log(toDos)