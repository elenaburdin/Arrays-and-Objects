let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// Nesting - putting the array inside the another array
// that's how we can nest them
// fruits.push(berries);

// to access something in nested array
// x = fruits[3][1];

// to nest all arrays
const allFruits = [fruits, berries];
x = allFruits;
x = allFruits[1][0];

// Concat -> take item from one array and adding them to different array
x = fruits.concat(berries);

// another way is spread operator (...)
// take the items from tho arrays and put them in 1 array and combine them
x = [...fruits, ...berries];
x = [...fruits, berries];

// Flatten Array
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// Static Methods on Array Object
x = Array.isArray(fruits); // true

// from -> will create an array from a value
x = Array.from('12345');

// create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

// console.log(arr);
console.log(x);