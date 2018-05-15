/* var myMap = new Map();

// Set
myMap.set('name', 'Mike');

// Get
console.log(myMap.get('name'));

// Has
myMap.set('age', 25);
console.log(myMap.has('age'));

// Delete
myMap.delete('name');

// Clear
myMap.clear();

// Size
console.log(myMap.size);

var user = true;
myMap.set(user, 'Madison');
console.log(myMap.get(user));

 */

/* var myMap = new Map();

myMap.set(1, 'Mike');
myMap.set(2, 'Jack');
myMap.set(3, 'Ben');

console.log([...myMap]);
console.log(myMap.keys());
console.log(myMap.values()); */

// Challenge
var location = {name: 'Madison'};
var secondLocation = {name: 'Platteville'};
var weatherMap = new Map();

function setWeather(location, temp) {
    weatherMap.set(location, temp);
}

function printWeather(location) {
    // if there's weather, print nice message, else tell them no weather recorded
    console.log(weatherMap.has(location) ? `${location.name} has a temp of ${weatherMap.get(location)}` : `No weather recorded for ${location.name}`);
}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);