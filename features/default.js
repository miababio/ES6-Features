/* function sayHello(name = "World") {
    console.log("Hello " + name + "!");
}

sayHello(); */

function greetUser (user = {name: "Anonymous"}) {
    console.log("Hello " + user.name + "!");
}

greetUser();
greetUser({name: "Mike"});