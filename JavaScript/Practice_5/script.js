// write a funtion to display a string value
let print = function displayString(str) {
  console.log(str);
};
print("Arrow function learning");
let addReuslt = function sum(a, b) {
  console.log(a + b);
};
addReuslt(10, 20);

let diffRes = function difference(a, b) {
  if (a > b) {
    console.log(a - b);
  } else {
    console.log(b - a);
  }
};
diffRes(30, 60);

let mulResult = function mul(a, b) {
  console.log(a * b);
};
mulResult(10, 40);

let divResult = function division(a, b) {
  if (b != 0) {
    console.log(a / b);
  } else {
    console.log("not a valid dr");
  }
};
divResult(40, 50);

//function without name => Anonymous function

let printName = function (name) {
  console.log(name);
};
printName("Kashif");

let printCurrentTrainingCourse = function (name) {
  console.log(name);
};
printCurrentTrainingCourse("Node Js");

//Exactly how to write arrow function |
//a function w/o function keyword w/o without function name  => Arrow Function

let addition = (a, b) => {
  console.log(a + b);
};
addition(20, 30);

let subtraction = (a, b) => {
  console.log(a - b);
};
subtraction(50, 20);

let multiplication = (a, b) => {
  console.log(a * b);
};
multiplication(10, 6);

let division = (a, b) => {
  console.log(a / b);
};
division(30, 2);
