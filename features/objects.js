var age = 25;

function printHello() {
    console.log(`Hello!`);
}
    

var person = {
    name: 'Mike',
    age,
    printHello,
    ['hello' + (age + 2)]: 'I am here',
    printAge() {
        console.log(this.age);
    }
};

person.printAge();