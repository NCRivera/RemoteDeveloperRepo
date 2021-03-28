// for loops - Imperative Loop

let num = 0;

num = num + 1 // 1
num ++; // 2, same as above but a shortened version
num ++; // 3
num ++; // 4
num ++; // 5

console.log(num); // Prints 4

for (let i = 0; i < 10; i++) {
    // Statement
    console.log(i);
    // Can use a break keyword to jump out of the loop
    // break;
}


//                01234567
const fName = "NicholaasAAAAAA";


for (let i = 0; i < fName.length; i++) {
        let char = fName[i];
        console.log(char);
}
    
let firstName = "NicholasAAAAAAAA";

let alphaNum = 0;
for (let i = 0; i < firstName.length; i++) {
    if (firstName[i] === 'a' ||  firstName[i] === 'A' ) {
        // Statement
        alphaNum++;
    } 
}

console.log(`Number of A characters: ${alphaNum}`)

const numArray = [1, 2, 3, 4, 5];
const newArray = [];

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);

    // Doubling and replacing the numbers within the array
    // numArray[i] = numArray[i] * 100
    // console.log(numArray[i]);

    // Using new Array to contain the value.
    // newArray[i] = numArray[i] * 1000

    // Push method
    newArray.push(numArray[i] * 1000);
}

console.log(numArray);
console.log(newArray);
