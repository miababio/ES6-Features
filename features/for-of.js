/* var locations = [];
locations.push({
    name: 'Madison',
    weather: 75
});

locations.push({
    name: 'Sun Prairie',
    weather: 73
});

for(let location of locations) {
    console.log(`It's ${location.weather} in ${location.name}`);
} */

// Challenge Area
function averageGrade(...grades) {
    let sum = 0;
    for(let grade of grades) {
        sum += grade;
    }
    return sum / grades.length;
}

var total = averageGrade(1, 44, 99);
console.log(total);