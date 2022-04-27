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
    draw: 3.25,
    team2: 6.5,
  },
};
const players1 = game.players[0];
const players2 = game.players[1];
const [gk, ...fieldPlayers] = players1;

const players = [...players1, ...players2];

const finalPlayers = [...players1, "Thiago", "Coutinho", "Perisic"];

const [team1, draw, team2] = Object.values(game.odds);

const printGoals = (...names) => {
  for (const name of names) {
    console.log(`${name} scored a goal!`);
  }
  console.log("total goals: " + names.length);
};

//short circuiting... && if first statement is false do second
// || if first statement is false print false, negate second
// ?? to also include null and undefined in it
// team1 > team2 && console.log("team2 is the winner");
// team2 > team1 && console.log("team1 is the winner");

//-----------------
//coding challenge #2

for (const [i, player] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(i) + 1}: ${player}`);
}

let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}

console.log(sum / Object.values(game.odds).length);

//base variable, start of sentence
let sentence = "odd of ";
//use of destructuring, working with Object.entries
for (const [team, odd] of Object.entries(game.odds)) {
  //conditional statement, clean looking no extra console logs
  //game[team] is cool because i'm using the destructured variable team
  //to see if a team is present in the game object
  if (game[team] == undefined) sentence += `draw: ${odd}`;
  else sentence += `victory ${game[team]}: ${odd}`;
  //console.log the sentencce first so there are no \n in the code
  console.log(sentence);
  //reset the sentence variable
  sentence = "odd of ";
}

const scorers = {};

for (const player of game.scored) {
  //if scorers[player] does not exist, set their value to 1
  if (!scorers[player]) scorers[player] = 1;
  //if they do exist, increment by 1 to their value
  else scorers[player]++;
}
console.log(scorers);
