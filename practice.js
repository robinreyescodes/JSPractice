const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//recPortion = current > recFood * 0.9 && current < recFood * 1.1
//recFood = weight ** 0.75 * 28

//loop over dogs and add 'recFood' property to each object along with its calculation
dogs.forEach((dog) => (dog.recFood = dog.weight ** 0.75 * 28));

//find Sarah's dog and log to console whether its eating too  much or too little

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));

const muchOrLittle =
  sarahsDog.curFood > sarahsDog.recFood * 1.1
    ? "too much"
    : sarahsDog.curFood < sarahsDog.recFood * 0.9
    ? "too little"
    : "just right";

console.log(`Sarah's dog eats ${muchOrLittle}`);

//create an array separating owners that eats too much or too little
//turn above muchOrLittle into a function
function eatTooMuchTooLittle(curFood, recFood) {
  return curFood > recFood * 1.1
    ? "too much"
    : curFood < recFood * 0.9
    ? "too little"
    : "just right";
}
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

//loop through each of dogs
dogs.forEach((dog) => {
  let string = eatTooMuchTooLittle(dog.curFood, dog.recFood);
  return string === "too much"
    ? ownersEatTooMuch.push(dog.owners)
    : string === "too little"
    ? ownersEatTooLittle.push(dog.owners)
    : "";
});

function ownersString(owners) {
  return owners
    .flat()
    .reduce((previous, current) => `${previous} and ${current}`);
}
console.log(ownersString(ownersEatTooLittle) + "'s dogs eat too little");
console.log(ownersString(ownersEatTooMuch) + "'s dogs eat too much");

console.log(dogs.some((dog) => dog.curFood === dog.recFood));
console.log(
  dogs.some(
    (dog) => eatTooMuchTooLittle(dog.curFood, dog.recFood) === "just right"
  )
);

const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
