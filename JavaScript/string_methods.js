// String Methods

const analyst = "Nicholas";

// length 
console.log(analyst.length);

// IndexOf

console.log(analyst.indexOf("c"));
console.log(analyst.indexOf("las"));

// slice

for (let i = 0; i<analyst.length; i++) {
    console.log(i + "-" + analyst[i]);
}

console.log(analyst.slice(3, 7));
console.log(analyst.slice(0));
console.log(analyst.slice(3));
console.log(analyst.slice(0, -1));
console.log(analyst.slice(0, -3));

// toUpper, toLower
console.log(analyst.toUpperCase());
console.log(analyst.toLowerCase());

// concat
console.log(analyst.concat(" LastName")); 

// replace
console.log(analyst.replace("s", "$"));

// split
console.log(analyst.split(""));

const sentence = "Nichols is the best!"
console.log(sentence.split(" "));

const sentenceSecond = "split.at.period"
console.log(sentenceSecond.split("."));

