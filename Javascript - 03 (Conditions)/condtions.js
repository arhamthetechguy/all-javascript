// tofixed

// let english = 65;
// let bangla = 88;
// let math = 77;

// let averageMarks = (english + bangla + math) / 3;

// console.log(averageMarks.toFixed(2));

//parseFloat/toFixed

// let math, english, arabic;
// math = 59;
// english = 53;
// arabic = 67;

// const averageMarks = (math + english + arabic) / 3;
// let toFixed = averageMarks.toFixed(2);
// console.log("Average Marks:", parseFloat(toFixed));

//parseInt

// let karim = 34;
// let rahim = 36;
// let hamid = 48;

// const ageAverage = (karim + rahim + hamid) / 3;

// let toFixed = ageAverage.toFixed(2);

// console.log("Average Age:", parseFloat(toFixed));

// Math.roud
// let english, bangla, math;
// english = 65.643;
// bangla = 88;
// math = 77;

// const averageMarks = (english + bangla + bangla) / 3;

// console.log("Average Marks:", Math.round(averageMarks));

//Math.floor
// let english, bangla, math;
// english = 65.643;
// bangla = 88.546;
// math = 77;

// const averageMarks = (english + bangla + bangla) / 3;

// console.log("Average Marks:", Math.floor(averageMarks));

// Math.ceil
// let english, bangla, math;
// english = 65;
// bangla = 88;
// math = 77;

// const averageMarks = (english + bangla + bangla) / 3;

// console.log("Average Marks:", Math.ceil(averageMarks));

// Math.abs
// let negetiveNumber = -67;

// console.log("Average Marks:", Math.abs(negetiveNumber));

// Math.random
// let mathRandom = Math.floor(Math.random() * 6) + 1;

// console.log("Dice Roller:", mathRandom);

// Math.random
let mathRandom = Math.floor(Math.random() * 6 ) + 1;

console.log("Dice Roller:", mathRandom);

// for (count = 1; count <= 100; count++){
// if (count % 2 === 0) {
//     console.log("Even Number:", count);
// }
// }

// for (count = 1; count <= 100; count++){
//     if (count % 2 !== 0){
//         console.log("Odd Number:", count);
//     } else {
//         console.log("Even Number:", count);
//     }
// }

// let newValue = 20;

// while (newValue <=20){
//     // console.log(newValue);
// }

// HomeWorks Problem Solving

// problem - 01
// Solve the problem with Javascript  to find the maximum between two numbers.

// let numOne = 10;
// let numTwo = 12;

// if (numTwo > numOne){
//     console.log(`${numTwo} is bigger than ${numOne}`);
// } else {
//     console.log(`${numOne} is smaller than ${numTwo}`);
// }

// problem - 02
// const num1 = 10;
// const num2 = 20;
// const num3 = 15;
// let maxNumber;

// if (num1 >= num2 && num1 >= num3) {
//   maxNumber = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//   maxNumber = num2;
// } else {
//   maxNumber = num3;
// }

// console.log("The maximum number is: " + maxNumber);

// const num1 = 10;
// const num2 = 25;
// const num3 = 15;
// let maxNumber;

// if (num1 >= num2 && num1 >= num3){
//     maxNumber = num1;
// } else if (num2 >= num1 && num2 >= num3){
//     maxNumber = num2;
// } else {
//     maxNumber = num3;
// }

// console.log("The maximum number is", maxNumber);

// const num1 = 15;
// const num2 = 12;
// let maxNumber;

// if (num1 >= num2){
//     maxNumber = num1;
// } else {
//     maxNumber = num2;
// }

// console.log("The maximum number is", maxNumber);

// problem - 02

const Gafur = 35;
const nurul = 30;
const gias = 40;
let elDer;

if (Gafur >= nurul && Gafur >= gias) {
  elDer = `Gafur and his age is ${Gafur}`;
} else if (nurul >= Gafur && nurul >= gias) {
  elDer = `Nurul and his age is ${nurul}`;
} else {
  elDer = `Gias and his age is ${gias}`;
}

console.log("The elder one is", elDer);

// problem - 3

// const number = 6;

// if (number < 0){
//     console.log("The number is positive");
// } else if (number > 0){
//     console.log("The number is negetive");
// } else {
//     console.log("The number is zero");
// }

// problem - 4

// const number = 10;

// if (number % 2 === 0){
//     console.log("The number is divisible");
// } else {
//     console.log("The number is not divisible");
// }

// problem - 05

// const number = 11;

// if (number % 2 === 0){
//     console.log("The number is even");
// } else {
//     console.log("The number is odd");
// }

// const character = "A";

// if ((character >= "A" && character <= "Z") || (character >= "a" && character <= "z")){
//     console.log("The character is an alphabet");
// } else {
//     console.log("The character is a character");
// }

// const character = "A";

// if ((character >= "A" && character <= "Z") || (character >= "a" && character <= "z")){
//     console.log("The character is an alphabet");
// } else {
//     console.log("The character is a character");
// }

// const num1 = 20;
// const num2 = 25;
// const num3 = 15;
// let maxNumber;

// if (num1 >= num2 && num1 >= num3){
//     maxNumber = num1;
// } else if (num2 >= num1 && num2 >= num3){
//     maxNumber = num2;
// }else{
//     maxNumber = num3;
// }

// console.log("The maxmimum number is", maxNumber);

// Problem -07

// const temperature = 30;

// if (temperature >= 30 ){
//     console.log("Weather is hot");
// } else if (temperature <= 25){
//     console.log("Weather is cold");
// } else {
//     console.log("Weather is normal");
// }

// Probelm - 08

// let math, english, physics;
// math = 80;
// english = 70;
// physics = 90;

// let averageMarks = (math + english + physics) / 3;

// console.log("The average marks is: " + averageMarks.toFixed(0) + "%");

// if (averageMarks >= 90){
//     console.log("The result is Grade Golden A+");
// } else if (averageMarks >= 80){
//     console.log("The result is Grade A+");
// } else if (averageMarks >= 70){
//     console.log("The result is Grade A");
// } else if (averageMarks >= 60){
//     console.log("The result is Grade A-");
// } else if (averageMarks >= 50){
//     console.log("The result is Grade B");
// } else if (averageMarks >= 40){
//     console.log("The result is Grade C");
// } else if (averageMarks >= 33){
//     console.log("The result is Grade D");
// } else {
//     console.log("The result is Grade F");
// }

// // Problem - 9
// let mathRandom = Math.floor(Math.random() * 10) + 1;
// console.log("Dice Roll is: " + mathRandom);

// Problem - 10

// for (count = 1; count <= 50; count++){
//     if (count % 2 === 0){
//         console.log("Even Number is: " + count);
//     }
// }

// let wLoop = 2;
// while (wLoop <= 2){
//     console.log(wLoop);
// }
