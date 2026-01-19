const person = {
    firstName: 'Felipe',
    lastName: 'Rocha',
    age: '21',
    hobbies: ['Assistir F1', 'Jogar futebol', 'Ler'],
    dog: {
        age: 5,
        name: 'Tareco',
    }
}

// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const hobbies = person.hobbies

//Mesma coisa que acima
//Também dá para renomear variáveis
const {firstName: primeiroNome,lastName,age,hobbies,dog: {name: dogName}} = person

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies[2])

console.log (dogName)
console.log(person.dog.age)