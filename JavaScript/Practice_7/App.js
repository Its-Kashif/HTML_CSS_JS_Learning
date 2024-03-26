/*
fetch API:
The Fetch API provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects.
The fetch method is used to fetch a resource (data).
let promise = fetch( url, [options] )
*/

/*
Understanding Terms
AJAX is Asynchronous JS & XML
JSON is JavaScript Object Notation
json() method: returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object)
*/

const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#fact");
let btn = document.querySelector("#btn");

// let getFact = async () => {
//   console.log("fetching data....");
//   //AJAX format
//   let response = await fetch(URL);
//   //JSON format
//   let data = await response.json();
//   factPara.innerText = data[1].text;
// };

let getFact = () => {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerHTML = data[2].text;
    });
};

btn.addEventListener("click", getFact);
