// for (let index = 1; index < 10; index++) {
//     console.log(index);
// }

const cars = ['Ferari', 'Tesla', 'BYD']

// for (let i = 0; i < cars.length ; i++) {
// //     console.log(cars[i])
// // }

// // for (let car of cars) {
// //     console.log(car)
// // }

// cars.forEach(function(i) {
//     console.log(i)
// })

let index = 0
while (index < 1) {
    console.log("O index é menor do que 10")
    // index = index + 1
    // index += 1

    // Mesma coisa que abaixo
    index++
}

const person = {
    name: 'Beatriz',
    age: 22,
}

for (property in person) {
    console.log(person[property])
}
//Não é muito performático ou rápido no JS
