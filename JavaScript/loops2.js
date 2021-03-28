// for oF loops
// Declarative Loop

const names = ["Nick", "David", "Jeffrey", "Jeremy"];

for (person of names) {
    console.log(person);
}

// for in Loops
// Declarative Loop

const users = {
    name: "Nicholas", 
    language: "JavaScript"
};

for (let key in users){
    console.log(key);
    console.log(users[key]);
    console.log(`Key: ${key} Value: ${users[key]}`);
}