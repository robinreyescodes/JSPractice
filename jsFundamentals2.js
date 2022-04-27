//data
const dolphins = [85, 54, 41];
const koalas = [23, 34, 27];

// function to calc average
const calcAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

//variables for averages
const dolphAvg = calcAverage(dolphins);
const koaAvg = calcAverage(koalas);

// const checkWinner = (dolphinAvg, koalaAvg) => {
//   if (dolphinAvg > koalaAvg * 2)
//     console.log(`Dolphins win: ${dolphinAvg} vs ${koalaAvg}`);
//   else if (koalaAvg > dolphinAvg * 2)
//     console.log(`Koalas win: ${koalaAvg} vs ${dolphinAvg}`);
//   else console.log("no one wins");
//   console.log(`Dolphins: ${dolphinAvg}`);
//   console.log(`Koalas: ${koalaAvg}`);
// };

// checkWinner(dolphAvg, koaAvg);

// ----------------------------------------------------------------
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [];
const total = [];

//standard for loop -> puts tips in side tip
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}

// for (const pay of total) {
//   console.log(pay);
// }

//----------------------------------------------------------------
//coding challenge 3

const markObj = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  bmi: 0,
  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return `${this.firstName}'s bmi is: ${this.bmi}`;
  },
};

const johnObj = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  bmi: 0,
};
/*
console.log(markObj.calcBMI()); //no binding

 //binding - creating a function
const calcBMI = markObj.calcBMI; //setting original function to variable
const johnBMI = calcBMI.bind(johnObj); //binding, partial application
console.log(johnBMI()); //calling our new function
 */

//----------------------------------------------------------------
//coding challenge 4
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const totals2 = [];

for (let i = 0; i < bills2.length; i++) {
  let tip = calcTip(bills2[i]);
  tips2.push(tip);
  totals2.push(bills2[i] + tip);
}

console.log(calcAverage2(...totals2));

function calcAverage2(...arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  console.log(sum);
  console.log(arr.length);
  return sum / arr.length;
}
