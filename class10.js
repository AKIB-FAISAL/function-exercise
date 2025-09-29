//1. Types + Conditionals
// pblm 1: Write a function checkType(value) that prints whether the value is a string, number, or boolean.function checkType(value) 
function checkType(value) {
    if (typeof value == "string") {
        console.log("It's a string");
    } else if (typeof value == "number") {
        console.log("It's a number");
    } else if (typeof value == "boolean") {
        console.log("It's a boolean");
    } else {
        console.log("Type not recognized");
    }
}
["Akib", 42, true,].forEach(checkType);

/*pblm 2 : Write a program that takes a number and prints:"Even" if the number is even,
"Odd" if the number is odd,*/
function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }
checkEvenOdd(5)  
//pblm 3 :Use a for loop to print all numbers from 1 to 10.
//2. Loops (for, while, forEach)
for (let a = 1; a <= 10; a++) {
    console.log(a);
}
//pblm 4 :Use a while loop to calculate the sum of numbers from 1 to 5.
let sum = 0;
let a = 1;
while (a <= 5) {
    sum += a;
    a++;
}
console.log("Sum from 1 to 5 is: " + sum);
//pblm 5 :Given an array ["apple", "banana", "cherry"], use forEach to print each fruit .
const fruits = ["apple", "banana", "cherry"];
for (let b = 0; b < fruits.length; b++) {
  console.log(fruits[b]);
}
//3. Functions + Arrays + Objects
/*pblm 6:Create a function countPassFail(scores) that takes an array of numbers.Count how many scores are >= 60 (pass), 
Count how many scores are < 60 (fail), Return an object like: { pass: 3, fail: 2 }*/
function countPassFail(scores) {
    let pass = 0;
    let fail = 0;
  for (let v = 0; v < scores.length; v++) {
      if (scores[v] >= 60) {
        pass++;
      } else {
        fail++;
      }
    }
  return {
      pass: pass,
      fail: fail
    };
  }
 const results = countPassFail([80, 45, 70, 59, 90]);
  console.log(results); 
  

