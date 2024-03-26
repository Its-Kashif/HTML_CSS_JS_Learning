//Do not need to attached the file with html document because we are using node js.

// call back function function
function greet() {
  return "Hello ";
}

function display(z) {
  return z;
}

console.log(display(greet()));

// console.log(display(greet()));

//another one ex:
function firstName(fname) {
  return fname;
}

function lastName(lname) {
  return lname;
}

function Name(para1, para2) {
  console.log(para1 + " " + para2);
}

Name(firstName("Md Kashif"), lastName("Quamar"));

//task

function calculate(fun) {
  return fun;
}

function add() {
  return "add";
}

console.log(calculate(add()));
