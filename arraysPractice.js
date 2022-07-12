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

// ----------------------------------------------------------------
//#4
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//create players arrays for each team
const players1 = game.players[0];
const players2 = game.players[1];

//first player = goalkeeper; fieldPlayers for the rest
const [goalkeeper, ...fieldPlayers] = players1;

//create allPlayers containing all playres of both teams
const allPlayers = players1.concat(players2);

//create players1Final with added players
const allPlayersFinal = [...players1, "Thiago", "Coutinho", "Perisic"];

//create variables for each odd in game.odds
const { team1, x, team2 } = game.odds;
console.log(team1);
console.log(x); //draw called x in object
console.log(team2);

//create a function that prints out all the names of the players
printGoals(...game.scored);

function printGoals(...players) {
  for (const player of players) {
    console.log(player, players.length);
  }
}

//print to the console which team is more likely to win
//without if/else or ternary operator

//the || looks for the first true value, if not it continues
console.log(team1 > team2 || `team 2 has more chance of winning`);

//the && looks for the first false value if not, it continues
console.log(team1 < team2 && `team 1 has more chnace of winning`);
