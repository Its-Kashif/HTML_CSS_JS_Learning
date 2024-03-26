/*
Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College
students” to this text using JS.
*/

let l = document.querySelector("h2");
console.log(l.innerText);
l.innerText = l.innerText + " very quickly";

/*
Create 3 divs with common class name - “box”. Access them & add some unique text to each
of them.
*/
let divs = document.querySelectorAll(".box");
divs[0].innerText = "first unique value";
divs[1].innerText = "second unique value";
divs[2].innerText = "third unique value";

/*
Create a new button element. Give it a text “click me”, background color of red & text color
of white.
Insert the button as the first element inside the body tag.
*/
let myButton = document.createElement("button");
myButton.innerText = "click me";
let body = document.querySelector("body");
body.prepend(myButton);
myButton.style.backgroundColor = "red";
myButton.style.color = "white";

/*
 Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.
*/
let para = document.querySelector(".para");
para.classList.add("newClass");

let button1 = document.querySelector("#b1");
button1.onclick = () => {
  console.log("btn1 was clicked");
  button1.style.backgroundColor = "red";
};

let button2 = document.querySelector("#b2");
button2.ondbclick = () => {
  console.log("second button was clicked");
};

let div = document.querySelector("#div_area");
div.onmouseover = () => {
  console.log("cursor inside the div");
};

button1.addEventListener(click, () => {
  console.log("btn1 was clicked by handler-1");
});

button1.addEventListener(click, () => {
  console.log("btn1 was clicked by handler-1");
});

button1.addEventListener(click, () => {
  console.log("btn1 was clicked by handle1");
});
