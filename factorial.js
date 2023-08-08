// function factorial(number) {
//   let result = 1;
//   for (let i = 1; i <= number; i++) {
//     result = result * i;
//   }
//   return result;
// }

// const result = factorial(9);
// console.log(result);

// function factorial(number) {
//   let result = 1;
//   for (let i = number; i >= 1; i--) {
//     result = result * i;
//     console.log(i);
//   }
//   return result;
// }

// const number = 9;
// const fact = factorial(number);
// console.log(number, fact);

function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result = result * num;
    num++;
  }
  return result;
}

const number = 9;
const fact = factorial(number);
console.log(number, fact);
