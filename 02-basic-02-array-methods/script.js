let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(100);
// arr.pop();

// arr.unshift(99);
// arr.shift();

// arr.reverse();

// to get smth from array
// include of a specific value is in the array
x = arr.includes(26);

// indexOf will give an index of a specific value | if smth is not there it will give u -1
x = arr.indexOf(15);

// wii return selected element in the array
x = arr.slice(1, 4); // returning | it will not change the arr values that was set previous

// x = arr.splice(1, 4); //will change the array

// delete 1 item
// x = arr.splice(3, 1);

// you can chain methods
x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);