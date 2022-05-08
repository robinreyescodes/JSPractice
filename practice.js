//practice problem; return a function from a function
//example of higher order function
function redundant(something) {
  return redundant.bind(something);
}

const f1 = redundant("apple");
console.log(f1);

//practice problem #2

/* 
  "Perimeters with a catch" 
  - without using branch pieces of code, find perimeter of circle or squre 
  - if 's' is given, perimeter of square
  - if 'l' is given, perimeter of circle 
  - only arithmetic/comparison operators 
*/

function perimeter(shape, num) {
  return shape == "s" ? num * 4 : shape == "c" ? num * 6.28 : null;
}

console.log(perimeter("c", 7));
