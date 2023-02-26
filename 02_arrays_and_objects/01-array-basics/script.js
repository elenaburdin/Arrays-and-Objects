let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mix = [12, 'Hello', true, null]

// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

// how to acces item by the index
x = numbers[0];

x = numbers[0] + numbers[3]; // 12 + 29 = 41

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

// to change a value
fruits[1] = 'pear';
// fruits.length = 2

// to add to the end 
// fruits[3] = 'strawberry'
fruits[fruits.length] = 'blueberry' // length will be always on more to the last, thus the blueberry is the last index
fruits[fruits.length] = 'peach'

x = fruits

fruits[fruits.length] = 'banana'

console.log(x);






