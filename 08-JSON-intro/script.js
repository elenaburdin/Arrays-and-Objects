const post = {
    id: 125,
    userName: "Smith745",
    title: "Do some homework for the next week"
}

// Convert to JSON
const str = JSON.stringify(post);
console.log(str);

// Parse JSON
const obj = JSON.parse(str);
console.log(obj);