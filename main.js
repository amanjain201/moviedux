const addTraditional = function (a, b) {
  return a + b;
};

const add = (a, b) => a + b;

const add2 = (a, b) => {
  console.log("Starting sum");
  return a + b;
};

// Real world use
const ids = [1, 2, 3, 4, 5];

ids.forEach((id) => {
  id++;
  console.log(id);
});

// console.log(add2(1,2));

// rest operator (ES6 feature)
function testRest(firstArg, secondArg, ...otherArgs) {
  console.log(firstArg);
  console.log(secondArg);
  console.log(otherArgs);
}

testRest("Aman", "Jain", "Is", "The", "Best");

// Spread operator ...  (used in react)
const fruits = ["apple", "banana"];
const moreFruits = ["cherry", "melon"];

const allFruits = [...fruits, ...moreFruits]; // Merges 2 arraya
const freshFruits = [...fruits, "cherry"];

console.log(fruits);
console.log(allFruits);
console.log(freshFruits);
