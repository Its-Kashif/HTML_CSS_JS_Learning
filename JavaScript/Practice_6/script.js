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
}, 2000);

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

/*
Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)
This style of programming becomes difficult to understand & manage.
*/

function getData(dataId, getNextData) {
  setTimeout(() => {
    console.log("data " + dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

/*
Promises
Promise is for “eventual” completion of task. It is an object in JS.
It is a solution to callback hell

A JavaScript Promise object can be:
Pending : the result is undefined
Resolved : the result is a value (fulfilled)
Rejected : the result is an error object

.then( ) & .catch( )
promise.then( ( res ) => { .... } )
promise.catch( ( err ) ) => { .... } )
*/
let promise = new Promise((resolve, reject) => {
  console.log(" I am work as a promise");
  resolve("success");
});

// let promise2 = new Promise((resolve, reject) => {
//   console.log("I am also a promise");
//   reject("Oop order cant delivered");
// });

getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("I am also a promise");
    resolve("Success");
  });
};

let promis = getPromise();
promis.then(() => {
  console.log("Pomise fulfilled");
});
promis.catch((err) => {
  console.log("Promise rejected " + err);
});

function getDataa(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data " + data);
      resolve("success");
    }, 3000);
  });
}

console.log("data-1 fetching....");
getDataa(1)
  .then((res) => {
    console.log("data-2 is fetching....");
    return getDataa(2);
  })
  .then((res) => {
    console.log("data-3 is fetching.....");
    return getDataa(3);
  })
  .then((res) => {
    console.log(res);
  });

/*
Async-Await:
async function always returns a promise.
async function myFunc( ) { .... }
await pauses the execution of its surrounding async function until the promise is settled.
*/

function getDataaa(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data " + dataId);
      resolve("success");
    }, 5000);
  });
}
async function gettingDatas() {
  console.log("data1 is fetching.....");
  await getDataaa(1);
  console.log("data2 is fetching.....");
  await getDataaa(2);
  console.log("data3 is fetching.....");
  await getDataaa(3);
}
gettingDatas();
