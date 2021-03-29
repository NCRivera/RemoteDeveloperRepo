// Array Methods

const analyst = "Nicholas".split("");
const analyst2 = "Richard".split("")
console.log(analyst);

// concat
console.log(analyst.concat(analyst2));

// slice
console.log("letters", analyst2.slice(3, -2))

// Push and Pop

analyst2.push("yes");
console.log(analyst2);

analyst2.pop();
console.log(analyst2);

// shift and unshift

analyst2.shift();
console.log(analyst2);

analyst2.unshift("R");
console.log(analyst2);

// splice

console.log(analyst2.splice(3));
console.log(analyst2);