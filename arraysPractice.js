//Data 1
const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

checkDogs(julia, kate);

//creating function 'checkDogs', accepting two arrays as parameters
function checkDogs(dogsJulia, dogsKate) {
  const juliasCorrected = dogsJulia.slice(2); //starts from 2nd index to the end
  const dogsCombined = juliasCorrected.concat(dogsKate);

  //different types of for loops
  //regular for
  for (let i = 0; i < dogsCombined.length; i++) {
    if (dogsCombined[i] >= 3)
      console.log(
        `Dog number ${i + 1} is an adult and is ${dogsCombined[i]} years old`
      );
    if (dogsCombined[i] < 3)
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
  }
}

/* // ------ METHODS ------
//slice
console.log("slice");
console.log(julia.slice(2)); //does NOT return deleted items
console.log(julia); //does NOT mutate original array

//splice
console.log("splice");
console.log(julia.splice(2)); //splice returns deleted items
console.log(julia); //it mutates original array
 */
