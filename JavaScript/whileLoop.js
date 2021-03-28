// While Loops

let  i = 0;

while (i < 25) {
    //Statement
    console.log(i);
    i++;
}

const siblings = ["Nick", "David", "Jeffrey", "Jeremy"];

while (true) {
    const firstName = siblings.pop();
    console.log(firstName);
    if (firstName[0] === "N") {
        console.log("Found him:", firstName + ".");
        break;
    }
}
