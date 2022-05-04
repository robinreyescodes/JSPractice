const names = ["robin", "renee", "raf", "mom", "dad"];

//basic js array, slice
const children = names.slice(0, 3);

//practicing spread operator and for of loop
function kids(...names) {
  for (const name of names) {
    console.log(name);
  }
}

kids(...children); //spread operator 'spreads' all the contents of the array

//here is an example of destructuring and rest operator
//spread opens up, rest gathers the rest and puts them together
const [oldest, middle, youngest, ...parents] = names;

console.log(`${oldest} is the oldest`);
console.log(`${middle} is the middle`);
console.log(`${youngest} is the youngest`);

let string = "";
//random logic thing
for (const parent of parents) {
  if (string == "") {
    string += `${parent}`;
  } else string += ` and ${parent} are the parents`;
}
console.log(string);
