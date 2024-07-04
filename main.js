//task 1

let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
} else if (number % 3 === 0) {
    console.log("Fizz");
} else if (number % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(number);
}

// task 2

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
} else {
    return false;
}

//task 3
let years = 5;
let lastNumber = years % 10;
let lastTwoNumbers = years % 100;

if (lastTwoNumbers >= 11 && lastTwoNumbers <= 19) {
    return years + " років";
}

if (lastNumber === 1) {
    return years + " рік";
} else if (lastNumber >= 2 && lastNumber <= 4) {
    return years + " роки";
} else {
    return years + " років";
}