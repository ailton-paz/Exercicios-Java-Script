const names = ['Felipe','João','Juca']

//names.shift() // Remove o primeiro item da lista
//names.unshift("Joaquim") // Adiciona um item no começo da lista
//names.pop() // Remove o último item da lista
//names.push("Gabro") // Adiciona um item no fim da lista

//names[1] = "Manauí" // Reassinalar qualquer item da lista

//console.log(names)
//console.log(names.indexOf("Gabro"))

//const sortedNames = names.sort() // Função que organiza em ordem alfabética

//console.log (sortedNames)

const numbers = [1, 2, 3, 4, 5]

const numbersMultipliedByTwo = numbers.map(function(item){
    return item * 3
})

const ages = [8, 13, 27, 30, 22, 40]

// const evenAges = ages.filter(function(age){

//     return age % 2 != 0

// })

const sumOfAges = ages.reduce(function(ages, accumulator){
    return ages + accumulator
}, 0)

document.writeln(sumOfAges)
