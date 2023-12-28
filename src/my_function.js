// myNamedFunction();

// function myNamedFunction() {
//   console.log("HI");
// }

// const epx = function () {
//   console.log("Hi I am Expresion function");
//   console.log(this);
// };
// epx();

// const arrow = () => {
//   console.log("I am Arrow function");
//   console.log(global);
// };
// arrow();

// console.log(global);
//-----------------------------------
// const user = {
//   name: "Java",
//   age: 20,
//   getEmail: function () {
//     console.log(this.name + this.age + "@gmail.com");
//   },
// };

// user.getEmail();
//-----------------------------------------------
// function add(x = 0, y = 0) {
//   //default value
//   console.log(x + y);
// }
// add(10, 20);
// add();

// function addN(...val) {
//   console.log(val);
//   let ans = 0;
//   for (let i of val) {
//     ans += i;
//   }
//   console.log(ans);
// }
// addN(10, 20, 30, 4, 5);
//----------------------------------
const num = [1, 2, 3, 4, 5];

// const result = num.reduce((a, b) => {
//   console.log(a, b);
//   return a + b;
// });
// console.log(result);

// const odd = num.filter((e) => {
//   return e % 2 == 1;
// });

// console.log(odd);

let message = false;
message && console.log("condition is true");

let age = 10;
//age > 50 ? console.log("true condition") : console.log("false condition"); //ternay operator

// user = { name: "flutter", age: age, elegible: age > 18 ? true : false };
// console.log(user);

// truthy and falsy
// false
// 0
// ""
// null
// NaN
// undefined
if (10 * "abc") {
  console.log("true");
} else {
  console.log(false);
}
