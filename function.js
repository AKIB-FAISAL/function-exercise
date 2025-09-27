//Problem 1: Check Prime Number
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let result = isPrime(11)
console.log(result);
// Problem 2: Reverse String
function reverseString(str) {
    if (typeof str !== 'string' || typeof str != "string") {
        return "Invalid input";
    }
    else {
        let reversed = '';
        let x = str.length - 1;
        while (x >= 0) {
            reversed += str[x];
            x--;
        }
        return reversed;
    }
}
let rev1 = reverseString("Akib");
console.log(rev1);
//Problem 3: Sum of Multiples
const sumofMultiples = (number) =>{
    let sum = 0;
    for (let v = 1; v <= number; v++) {
        if (v % 3 === 0 || v % 5 === 0) {
            sum += v;
        }
    }
    return sum;
}
let sum = sumofMultiples(10);
console.log(sum);
// Problem 4: Count Passing Students
function countPassStudents(scores) {
    let count = 0;
    for (let a = 0; a < scores.length; a++) {
        if (scores[a] >= 60)
            count++;
    }
    return count;
}
let scores = [45, 67, 89, 34, 90, 56];
console.log(countPassStudents(scores));
// Problem 5: Number Guessing Game
function guessNumber(userGuess) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Random Number was:" + randomNumber);
    while (true) {
        if (userGuess === randomNumber) {
            return "Correct! you guessed the number.";
        }
        else if (userGuess > randomNumber) {
            return "Too low! the number waw" + randomNumber;
        }
        else {
            return "Too high! the number was " + randomNumber;
        }
    }
}
let GuessNum = guessNumber(5);
console.log(GuessNum);



