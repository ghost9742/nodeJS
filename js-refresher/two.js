const person = {
  name: "Max",
  age: 29,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

// console.log(person);
// console.log(person.name);
// person.greet();

const hobbies = ["Sports", "cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(
//   hobbies.map((hobby) => {
//     return "Hobby: " + hobby;
//   })
// );
// hobbies.push("asd");
// console.log(hobbies);
// //const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//   return args;
// };

// console.log(toArray(1, 2, 3, 4));
