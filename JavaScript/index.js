// First Time writing JavaScript

console.log('Hello, World!');

// DATA TYPES

let num_var = 1;
console.log(num_var);

var camelCase = 14;
console.log(camelCase);

const varString = 'yes';
console.log(varString);



const myMoney = 100; // primitive data type
const dadMoney = 500;

console.log(myMoney + dadMoney);
console.log(myMoney * dadMoney);
console.log(myMoney - dadMoney);

const moneyTotal = myMoney * dadMoney;
console.log(moneyTotal)


// modulo (reaminder)


const remain = 12 % 5;

console.log(remain);


// Boolean

const boolValue = 1 > 3;
console.log(boolValue);

// if statement

if(1 > 2) {
    console.log('This would run if True')
}

if (3 > 2) {
    console.log('This would run not run if false')
}

// Even Odd Numbers problem: print 'even' if even number. Print 'odd' if number is odd number

const num = 6; // change the variable to assess

const booleanValue = num % 2 === 0;

if (booleanValue) { // even
    console.log('even')
} else {
    console.log('odd')
    // console.log('The number variable is not a number')
}