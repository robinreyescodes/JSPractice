//Coding Challenge #1
//Data 1: Mark weighs 78 and 1.69 tall John -> 92kg and 1.95tall

// let and const
//1. Store mark and john's mass/height in variables

let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

function bmiCalculator(weight, height) {
  return weight / height ** 2;
}

let markBMI = bmiCalculator(markWeight, markHeight);
let johnBMI = bmiCalculator(johnWeight, johnHeight);

//Coding Challenge #2

function whosbigger(mark, john) {
  let message = "";
  if (mark > john) {
    message = `mark's bmi ${mark} is bigger than john's ${john}!`;
  } else {
    message = `john's bmi ${john} is bigger than marks! ${mark}`;
  }

  return message;
}

//Coding Challenege #3
//Dolphins and Koalas!
let dolphins = [96, 108, 89];
let koalas = [88, 91, 110];

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

/* if (calcAverage(koalas) == calcAverage(dolphins)) console.log("draw!");
if (calcAverage(dolphins) > calcAverage(koalas)) console.log(`dolphins win!`);
if (calcAverage(koalas) > calcAverage(dolphins)) console.log(`koalas win!`); */

//coding challenge #4
let bills = [275, 40, 430];
let tip = 0;

function calcTip(...bills) {
  for (const bill of bills) {
    tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`bill is ${bill} tip is ${tip} total is ${bill + tip}`);
  }
}

calcTip(...bills);
