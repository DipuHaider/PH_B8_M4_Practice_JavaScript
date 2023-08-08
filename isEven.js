function isEven(number) {
  const remainder = number % 2;
  //   console.log(remainder);
  //   if (remainder == 0) {
  if (remainder === 0) {
    // console.log("number is even");
    return true;
  } else {
    // console.log("number is odd");
    return false;
  }
}

// isEven(100);
// isEven(303);

const myNumber = isEven(100);
console.log(myNumber);
const myNumber1 = isEven(303);
console.log(myNumber1);
