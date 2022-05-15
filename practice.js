//javascript practice problem #1
// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
/* 
  TEST CASES
  1) myFunction('abcd',1) -> "a"
  2) myFunction('zyxbwpl',5) -> "w"
  3) myFunction('gfedcba',3) -> "e"
*/

function myFunction(a, n) {
  //strange that it wants the position of the letter in relation to the string
  //not like normal indexes...anyway

  return a.charAt(n - 1); //string method finds the char at a certain index
}

console.log(myFunction("abcd", 1));
console.log(myFunction("zyxbwpl", 5));
console.log(myFunction("gfedcba", 3));

//javascript practice #2
// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
/* 
  Test Cases
  1) percentOf(100, 50) -> 50
  2) percentOf(10, 1) -> 0.1
  3) percentOf(500, 25) -> 125
*/

function percentOf(a, b) {
  //percentage of a number is done by multiplying it by number in such format 0.1, 0.2 etc
  //take b and divide by 100 to turn it into a decimal
  //multiply a by that number

  return a * (b / 100);
}

console.log(percentOf(100, 50));
console.log(percentOf(10, 1));
console.log(percentOf(500, 25));

//javascript practice problem #3
// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function myFunction2(a, b) {
  return a === b;
}

//== vs === ! all depends on what you need code wise

console.log(myFunction2(2, 3)); //false because not equal in value, but equal in type
console.log(myFunction2(3, 3)); //true; equal in value and type
console.log(myFunction2(1, "1")); // false, equal in value but not type

// callback functions
// tip calculator

const bill1 = billCalculator(30, addTip); //high order function
const bill2 = billCalculator(60, addTip); //high order function

console.log(`bill #1: ${bill1}`); //template literal
console.log(`bill #2: ${bill2}`);

/* 
  our callback function takes the bill and finds the tip amount
*/
function addTip(bill) {
  if (bill < 50) {
    return bill * 0.2;
  }
  return bill * 0.4;
}

/* 
  function that adds up our bill plus the tip from our callback 
*/
function billCalculator(bill, callback) {
  return bill + callback(bill);
}
