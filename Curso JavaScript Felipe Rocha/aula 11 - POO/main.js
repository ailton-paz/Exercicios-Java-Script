class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    doubleAge() {
        console.log(`Sua idade ao quadrado é ${this.age**2}`)
    }

    static speak(name) {
        console.log(`Olá, jovem ${name}!`)
    }
}

const newPerson = [new Person("Beatriz", "Alves", 22), new Person("Ailton", "Paz", 25)]

// console.log(newPerson)
newPerson[1].getFullName()
Person.speak("Beatriz")
newPerson[1].doubleAge()
console.log(Person)