/* function greet(name = "Michael") {
    console.log("Hello " + name + "!");
    console.log(`Hello ${name}!`);
}

greet();
greet("Kate");

console.log(`1 + 6 = ${1 + 6}`);

console.log(`Hey,

This kind of looks like an email!

- Mike
`); */

var person = {
    name: "Michael",
    age: 24
};

var defaultPerson = {
    name: "Anonymous", 
    age: 0
};

function getPerson(person = defaultPerson) {
    console.log(`Hello ${person.name}! You're ${person.age}`);
}

getPerson();
getPerson(person);