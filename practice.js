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
