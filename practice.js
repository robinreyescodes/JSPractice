//print all even numbers from 0 - 10
console.log("practice problem 1");
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

console.log();
//print a table containing multiples from 1 - 10
//let our number be 5
console.log("practice problem 2");
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(num * i);
}

console.log("\npractice problem 3");
//turn kilometers to miles with a function
function toMiles(kilometers) {
  const miles = kilometers * 0.621371;
  return `${miles} miles`;
}
console.log(toMiles(10));

//get rid of the spaces in a string
console.log("\npractice problem 4");
const string = "robin reyes is the coolest";
console.log(string.replaceAll(" ", ""));
