/* var chatRooms = new Set();

// Add
chatRooms.add('Runners');
chatRooms.add('Runners');
chatRooms.add('Bikers');

// Size
console.log(chatRooms.size);

// Has
console.log(`Does the Set have Runners?: ${chatRooms.has('Runners')}`);

// Delete
chatRooms.delete('Bikers');
chatRooms.clear();
console.log(chatRooms.size);

chatRooms.add({name: 'Mike'});

// To Array
console.log([...chatRooms]);

chatRooms.forEach(function(chatRoom) {
    console.log(`Found chat room: ${chatRoom}`);
}); */

// Challenge
var movies = new Set();
// duplicate movie found: movie already exists
// movie is successfully added to the set

function addMovie(movieTitle) {
    if(movies.has(movieTitle))
        console.log(`Error! - '${movieTitle}' already exists.`);
    else
    {
        movies.add(movieTitle);
        console.log(`${movieTitle} is successfully added to the Set.`);
    }
}

addMovie("A New Hope");
addMovie("District 9");
addMovie("A New Hope");