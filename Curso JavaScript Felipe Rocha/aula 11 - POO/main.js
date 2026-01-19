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

const newPerson = new Person("Beatriz", "Alves", 22);

// console.log(newPerson)
newPerson.getFullName()
Person.speak("Beatriz")
newPerson.doubleAge()