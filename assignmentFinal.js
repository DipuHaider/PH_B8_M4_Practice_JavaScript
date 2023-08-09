// problem 1
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a number";
  }
  const cube = number * number * number;
  return cube;
}

// problem 2
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" && typeof string2 !== "string") {
    console.log("Please enter strings in both");
  } else if (typeof string1 !== "string") {
    console.log("Please enter string in string1");
  } else if (typeof string2 !== "string") {
    console.log("Please enter string in string2");
  } else {
    const booleanValue = console.log(string1.indexOf(string2) !== -1);
    return booleanValue;
  }
}

// Problem 3
function sortMaker(arr) {
  let a = arr[0];
  let b = arr[1];

  if (a === b) {
    console.log("equal");
  } else if (a > 0 && b > 0) {
    if (a < b) {
      [a, b] = [b, a];
      const sortedArr = console.log([a, b]);
      return sortedArr;
    } else {
      const unsortedArr = console.log([a, b]);
      return unsortedArr;
    }
  } else if (a < 0 || b < 0) {
    console.log("Invalid Input");
  }
}
