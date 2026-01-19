const toDos = [
    {
        id: 1,
        description: 'Lavar roupa',
        isCompleted: false
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: false
    },
    {
        id: 3,
        description: 'Arrumar a casa',
        isCompleted: false
    }
]

/*
Quando mandarmos uma lista para uma API, temos
que mandá-la em formato JSON 
*/
const toDosJSON = JSON.stringify(toDos) // Transforma a lista em JSON
const toDosList = JSON.parse(toDosJSON) // Transforma de volta para lista

console.log(toDosJSON)
console.log(toDosList)
