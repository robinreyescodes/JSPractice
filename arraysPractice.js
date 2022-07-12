//coding challenges for warm up
//7.10.22

//#1
//test data 1
// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

//test data 2
const julia = [9, 16, 6, 8, 3];
const kate = [10, 5, 6, 1, 4];

// checkDogs(julia, kate);
//create function that accepts two arrays of dogs
function checkDogs(dog1, dog2) {
  //first and last two pets in array1 are CATS not dogs
  //shallow copy (do not mutate original array)
  //slice here will be best; remember, do not include second index element
  const dog1Updated = dog1.slice(1, -2);
  //create array with both the updated array and other array
  const allDogs = dog1Updated.concat(dog2);
  console.log(allDogs);
  //log to console a string based off of age
  allDogs.forEach((age, idx) => {
    let string = `Dog number ${idx + 1}`;
    console.log(
      age >= 3
        ? (string += ` is an adult and is ${age} years old`)
        : (string += ` is still a puppy`)
    );
  });
}

// ----------------------------------------------------------------
//#2

// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//function, takes arrays of dogs ages called 'ages'
function calcAverageHumanAge(ages) {
  //calculate dog age in human years
  let humanAges = ages
    .map((age) => {
      if (age <= 2) return age * 2;
      if (age > 2) return 16 + age * 4;
    })
    .filter((age) => age >= 18)
    .reduce((prev, curr, i, arr) => {
      return prev + curr / arr.length;
    }, 0);
  return humanAges;
}

// ----------------------------------------------------------------
//#3
const calcAvgAgeArrow = (ages) => {
  const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const agesFiltered = humanAges.filter((age) => age >= 18);
  const agesAverage = agesFiltered.reduce((prev, cur) => prev + cur, 0);
  return agesAverage / agesFiltered.length;
};

// console.log(calcAvgAgeArrow([16, 6, 10, 5, 6, 1, 4]));
