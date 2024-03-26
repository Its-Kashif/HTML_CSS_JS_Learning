/*
Get user to input a number using prompt(“Enter a number:”). Check if the number is
a multiple of 5 or not. */

let num = 4;
if (num % 5 == 0) {
  console.log("multiple of 5");
} else {
  console.log("not a multiple of 5");
}

/*
 Write a code which can give grades to students according to their scores:
 90-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let grade = prompt("enter the number");
if (grade >= 90 && grade <= 100) {
  console.log("A");
} else if (grade >= 70 && grade < 89) {
  console.log("B");
} else if (grade >= 60 && grade < 70) {
  console.log("C");
} else if (grade >= 50 && grade < 60) {
  console.log("C");
} else if (grade >= 0 && grade <= 49) {
  console.log("F");
} else {
  console.log("invalid grade");
}

// Print all even numbers from 0 to 100
for (let i = 0; i < 100; i++) {
  console.log(i + 1);
}

// // for-of loop
let str = "hey john";
for (let i of str) {
  console.log(i);
}

const array = [10, 20, 30, 40, 50];
for (let i of array) {
  console.log(i);
}

//for in loop
let Student = {
  name: "Kashif",
  age: 22,
  gender: "male",
};
console.log(Student);
for (let key in Student) {
  console.log("key ", key, " value= ", Student[key]);
}

// /*
// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.
// */
const actualNumber = "40";
let guessNumber = prompt("guess the actual number");
while (guessNumber !== actualNumber) {
  alert("you enterd number does not match");
  guessNumber = prompt("Try again to guess the actual number");
}
console.log("congrats! You won the game");

// /*
// Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = “kashifquamar” , username should be “@kashifquamar13”
// */
let fulname = prompt("Enter name");
let uname = "@" + fulname + fulname.length;
console.log(uname);

let literalString = `This is template literals`;
console.log(literalString);
let obj = {
  item: "pen",
  price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price}`;
console.log(output);
str = "king kobra";
console.log(str.trim());

/*
For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.
*/
let marksArray = [85, 97, 44, 37, 76, 60];
let totalMarks = 0;
for (const i of marksArray) {
  totalMarks = totalMarks + i;
  console.log(totalMarks);
}
console.log(`Grade average= ${totalMarks / marks.length}`);

/*
 For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
 All items have an offer of 10% OFF on them. Change the array to store final price after
 applying offer of 10%.
*/

const items = [250, 645, 300, 900, 50];
for (let i = 0; i < items.length; i++) {
  items[i] = items[i] - items[i] * 0.1;
}
console.log(items);

/*
 Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

/*
Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.
*/
function vowelCount(str) {
  let count = 0;
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count++;
    }
  }
  return count;
}
console.log(vowelCount("function"));

/*
Create an arrow function to perform the same task.
*/
const arrowVowelCount = (str) => {
  let count = 0;
  str = str.toLowerCase();
  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count++;
    }
  }
  return count;
};
console.log(arrowVowelCount("string"));

/*
For a given array of numbers, print the square of each value using the forEach loop.
*/
const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element ** 2);
});

/*
We are given array of marks of students. Filter our of the marks of students that scored 90+.
*/
const marks = [70, 90, 95, 60, 70, 92, 99, 67];
const higherMarks = marks.filter((value) => {
  return value > 90;
});
console.log(higherMarks);

/*
 Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.
 */

let n = 8;
const number = new Array();
for (let i = 1; i <= n; i++) {
  number.push(i);
}
console.log(number.length);
let sum = number.reduce((res, value) => {
  return res + value;
});
console.log(sum);

let prod = number.reduce((prod, element) => {
  return prod * element;
});
console.log(prod);
