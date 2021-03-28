// objects

const name = "Nick";
const age = 27;
const job = "analyst";

const user = {
    name: "Nick", 
    age: 32, 
    job: "Analyst", 
    socialMedia: {
        twitter: 'MisterDataFrame', 
        facebook: ""
    }
};

console.log(user.name);
const key = 'age'

console.log(user['age']);

console.log(user[key]);

user.age = 33
console.log(user.age);

user['age'] = 34
console.log(user.age);

console.log(user.socialMedia.twitter);
console.log(user['socialMedia']['twitter'])

console.log(user.socialMedia.instagram)