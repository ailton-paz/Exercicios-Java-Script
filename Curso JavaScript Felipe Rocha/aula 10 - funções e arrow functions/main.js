// function sum(a, b) {
//     console.log(a  b)
// }

// sum(2,4)

function sum(a,b = 10){
    return a+b
}

const sumValue = sum(2)
console.log(sumValue)

const sumArrow = (a,b = 100) => {
    return a + b
}

console.log(sumArrow(6))