const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
}

console.log(person.age);

// Destructuring
const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
}

const {
    id: todoId,
    title, user:
    { name } } = todo;

// console.log(id, title);
console.log(todoId);


// destructor arrays
const numbers = [23, 45, 74, 43];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);

// to get the rest arrays, we use rest operator
