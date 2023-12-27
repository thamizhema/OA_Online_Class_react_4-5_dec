const values = ["flutter", "react", "c++", "C#"];
const gd = ["PS", "IL", "AE"];

const allCourse = [...values, ...gd]; // Spread
console.log(allCourse);

const [f, r, ...a] = allCourse; //Destructure
console.log(f, r);
console.log(a);

// values.push("Dart");
// values.unshift("java");

// let removedValue = values.pop();
// let removedValue = values.shift();
// console.log(removedValue);

// console.log(values);

/// looping
// for (let i = 0; i < values.length; i += 1) {
//   console.log(values[i]);
// }

// for (let i of values) {
//   console.log(i);
// }

// const data1 = values.forEach((elem, ind) => {
//   console.log(elem, ind);
// });
// console.log(data1);

// const data2 = values.map((elem, ind) => {
//   console.log(elem, ind);
//   return `<div class="user">${elem}</div>`;
// });

// console.log(data2);

const task1 = ["a", "b", "c", "d", "e"];
const ans = ["e", "d", "c", "b", "a"];
