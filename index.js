// 📒📒📒  JavaScript - A Quick Refresher 📒📒📒

// 🔥🔥🔥 JavaScript in a Nutshell 🔥🔥🔥

//JavaScript Summary

// ☝️Weakly Typed Language =>
// 1. No explicit type assignment
// 2.Data types can be switched dynamically

// ☝️Object-Oriented Language =>
// 1. Data can be organized in logical objects
// 2. Primitive and reference types

// ☝️Versatile Language
// 1. Runs in browser & directly on a PC/server
// 2. Can perform a broad variety of tasks

// 🔥🔥🔥 Refreshing the Core Syntax 🔥🔥🔥

var name = "Shoxrux";
var age = 23;
var hasHobbies = true;
function summarizeUser(userName, userAge, userHasHobbies) {
  return (
    "Name is " +
    userName +
    ", " +
    "age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies
  );
}

console.log(summarizeUser(name, age, hasHobbies));

// 🔥🔥🔥 let & const  🔥🔥🔥

// let block scope
{
  let firstName = "Shoxrux";
}
// console.log(firstName); cannot use outside block

// const can't  change

const isProgrammer = true;
// isProgrammer = false; // We can't change value

// 🔥🔥🔥 Understanding Arrow Functions  🔥🔥🔥

const summarizeUserArrow = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", " +
    "age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobbies +
    " inArrowFunc"
  );
};
console.log(summarizeUserArrow(name, age, hasHobbies));

// 🔥🔥🔥 Working with Objects, Properties & Methods 🔥🔥🔥

// const person = {
//   name: "Shoxrux",
//   age: 23,
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// const person = {
//   name: "Shoxrux",
//   age: 23,
//   greet() {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

const person = {
  name: "Shoxrux",
  age: 23,
  greet: () => {
    console.log(`Hello, I am ${name}`);
  },
};

console.log(person);
person.greet();

// 🔥🔥🔥 Arrays & Array Methods 🔥🔥🔥

const hobbies = ["Sports", "Dancing", "Jogging"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

hobbiesMap = hobbies.map((hobby) => {
  return "Hobby: " + hobby;
});

console.log(hobbies);
console.log(hobbiesMap);

hobbies.push("Programming");
console.log(hobbies);

// 🔥🔥🔥 Understanding Spread & Rest Operators 🔥🔥🔥
item = "Gaming";
const copiedArray = [...hobbies, item];
console.log(copiedArray);

const copiedPerson = { ...person };
console.log(copiedPerson);

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3));

// 🔥🔥🔥 Destructuring 🔥🔥🔥

const personDestruct = {
  name: "Shoxrux",
  age: 23,
  greet() {
    console.log(`Hello, I am ${this.name}`);
  },
};

printName = (person) => {
  console.log(person.name);
};
printName(personDestruct);

printNameWithDestructuring = ({ name }) => {
  console.log(name);
};
printName(personDestruct);

const hobbiesArr = ["Sports", "Dancing", "Jogging"];
const [hobby1, hobby2] = hobbiesArr;
console.log(hobby1, hobby2);

// 🔥🔥🔥 Async Code & Promises 🔥🔥🔥

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};
setTimeout(() => {
  console.log("Timer is done");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello");
console.log("Hi");
