const name = "Max";

console.log(name);
let age = 21;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return "Name is" + userName + "age " + userAge + "hobbies " + userHasHobby;
};

const add = (a, b) => a + b;

console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));
