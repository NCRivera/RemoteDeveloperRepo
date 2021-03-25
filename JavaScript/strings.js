// Strings

let firstInitial = 'N'; // single
let middleInitial = "C"; // double
let lastInitial = `R ` // backtick
let exampleInterpolation = `${firstInitial}${middleInitial}${lastInitial} `

let exampleString = 'Nick\'s String'

console.log(firstInitial);
console.log(middleInitial);
console.log(lastInitial);
console.log(exampleInterpolation);
console.log(exampleString);


// Indexing - zero indexed
console.log(exampleString[7]);

// Concatenation
console.log(firstInitial +  ' ' + middleInitial +  ' ' + lastInitial);

// String Method
console.log(exampleString.length);

if (firstInitial === 'N') {
    console.log('OK');
}

// Template Strings
var first = 'my fiend';

var helloString = `Hey ${first}, how's it going?`;

console.log(helloString);

var multilineString = "first line \nsecond line \nthird line";

var multilineFormatting = `
One Line ${firstInitial}
Two Lines ${middleInitial}
Three Lines ${lastInitial}

HTML CODE
<div>
    <h1>${first}</h1>
</div>
`;

console.log(multilineString);
console.log(multilineFormatting);

