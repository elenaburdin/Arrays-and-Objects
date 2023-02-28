//Object literal 
let x;
const todo = {};
todo.id = 1;
todo.name = 'To read 10 min'
x = todo;

// Pbject constructor
const todo1 = new Object();
todo1.id = 1;
todo1.name = 'To read 15 min'
x = todo1;


// Nesting Object
const music = {
    name: 'Some Artist',
    genre: 'Rock',
    musicService: {
        spotify: 'Available',
        iTunes: 'Not Available'
    }
}

x = music.musicService.spotify;


// spread Object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };

x = obj3;

// we can also use assign object
const obj4 = Object.assign({}, obj1, obj2);
x = obj4;


// Arrays of an Object
const todos = [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Thor' },
    { id: 3, name: 'Loki' },
]

// to access a specific object
x = todos[0].name;

// to get the keys
x = Object.keys(todos)

// to get the length
x = Object.keys(todos).length;

// to get the values
x = Object.values(todos);

// to get the key values pairs
x = Object.entries(todos);

// if the property has a specific object
x = todo.hasOwnProperty('name');

console.log(x);
