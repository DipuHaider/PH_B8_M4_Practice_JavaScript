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
    return "Please enter strings in both";
  } else if (typeof string1 !== "string") {
    return "Please enter string in string1";
  } else if (typeof string2 !== "string") {
    return "Please enter string in string2";
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
    return "equal";
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
    return "Invalid Input";
  }
}

// Problem 4
function findAddress(obj) {
  let objStreet = obj.street;
  let objHouse = obj.house;
  let objSociety = obj.society;

  if (typeof objStreet === "undefined") {
    objStreet = "__";
  }
  if (typeof objHouse === "undefined") {
    objHouse = "__";
  }
  if (typeof objSociety === "undefined") {
    objSociety = "__";
  }

  const objOutput = console.log(objStreet + ",", objHouse + ",", objSociety);
  return objOutput;
}
