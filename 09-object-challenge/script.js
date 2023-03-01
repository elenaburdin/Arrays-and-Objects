// Step 1
const library = [
    {
        title: 'The Shards',
        author: 'Bret Easton Ellis',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Toy Fights',
        author: 'Don Paterson',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'You are not Alone',
        author: 'Cariad Lloyd',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

// Step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// Step 3
const { title: firstBook } = library[0]
console.log(firstBook);

// Step 4
const obj = JSON.stringify(library);
console.log(obj);



