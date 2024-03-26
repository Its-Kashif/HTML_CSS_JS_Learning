/*
synchronous:Synchronous means the code runs in a particular sequence of instructions given
 in the program.Each instruction waits for the previous instruction to complete its 
 execution. 
 eg: below------
 */
console.log(1);
console.log(2);
console.log(3);

/*
asynchronous:
Due to synchronous programming, sometimes imp instructions get
blocked due to some previous instructions, which causes a delay in the UI.
Asynchronous code execution allows to execute next instructions
immediately and doesn't block the flow. 
eg:below-----
*/
function greet() {
  console.log("Hello");
}
setTimeout(greet, 2000);
console.log("One");
console.log("Two");

setTimeout(() => {
  console.log("Hi");
}, 4000);

console.log("three");
console.log("four");

//Callback function

//example
let sum = (a, b) => {
  return a + b;
};

function calculateSum(a, b, sumAsCallBack) {
  let result = sum(a, b);
  console.log(result);
}
calculateSum(10, 20, sum);

//example
function calculateSub(a, b, subCallBack) {
  console.log(subCallBack(a, b));
}

calculateSub(20, 40, (a, b) => {
  return a + b;
});
