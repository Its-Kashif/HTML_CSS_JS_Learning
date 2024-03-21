import { add } from "./add.js";
import { mul } from "./mul.js";
import { sub } from "./sub.js";
import { div } from "./div.js";
import { rem } from "./remainder.js";
let a = 10;
let b = 20;
let operation = "%";

switch (operation) {
  case "+":
    add(a, b);
    break;
  case "-":
    sub(a, b);
    break;
  case "*":
    mul(a, b);
    break;
  case "/":
    div(a, b);
    break;
  case "%":
    rem(a, b);
    break;

  default:
    console.log("invalid input");
    break;
}
