class Person {
    constructor(name) {
        this.name = typeof name === 'string' ? name : 'Anonymous';
    }
    set name (value) {
        this._name = Person.capitalizeWord(value);
    }
    get name () {
        return this._name;
    }
    printGreeting() {
        console.log(`Hi! I'm ${this.name}!`);
    }
    static capitalizeWord(word) {
        return word[0].toUpperCase() + word.slice(1);
    }
}

class Employee extends Person {
    constructor(name, job = 'Unemployed') {
        super(name);
        this.job = job;
    }
    printGreeting() {
        console.log(`Hi! I'm ${this.name}, and I am a ${this.job}!`);
    }
    callSuperMethod() {
        super.printGreeting();
    }
}

var person1 = new Employee('mike', 'Developer');
person1.name = 'jen';
person1.printGreeting();
person1.callSuperMethod();

var person2 = new Person();
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));