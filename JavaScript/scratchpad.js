const myFirstName = 'Nick';
const myAge = 32;
let myFullName = myFirstName;

console.log(`Hi my name is ${myFullName} and I'm ${myAge} years old.`);

if (myAge > 28) {
    console.log("I'm older than Aaron");
} else if (myAge === 28) {
    console.log("I'm the same age as Aaron");
} else {
    console.log("I'm younger than Aaron");
}

let isEven = (myAge % 2) === 0;
if (isEven) {
    console.log("My age is even");
} else {
    console.log("My age is odd");
}

console.log(`Hello! My name is ${myFullName} and I am ${myAge} years old.`);
console.log("I'm older than Aaron");
console.log("My age is even");

let activeUserCount = 2;

let formatString = `There is ${activeUserCount} active user.`;
console.log(formatString);


if (activeUserCount === 1) {
    console.log("There IS 1 active USER");
} else {
    console.log("There ARE 2 active USERS");
}

// FINAL CHALLENGE
let myOrdinalNumber = 1;
if (myOrdinalNumber === 1) {
    console.log('1st')
} else if (myOrdinalNumber === 2) {
    console.log('2nd')
} else if (myOrdinalNumber === 3) {
    console.log('3rd')
} else {
    console.log(`${myOrdinalNumber}th`)
}

var myName = 'Aaron';

console.log(myName[1] + 2);