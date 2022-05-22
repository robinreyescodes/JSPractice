//Practice Problem #1 [Arrays] easy
const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];

let scores = {};
let counter = 0;
for (const game of competitions) {
  if (results[counter] == 0) {
    if (!scores[game[1]]) scores[game[1]] = 3;
    else scores[game[1]] += 3;
  }

  if (results[counter] == 1) {
    if (!scores[game[0]]) scores[game[0]] = 3;
    else scores[game[0]] += 3;
  }
  counter++;
}

for (const item of Object.entries(scores)) {
  console.log(Object.values(item));
}
