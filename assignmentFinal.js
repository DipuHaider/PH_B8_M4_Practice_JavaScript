function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a number";
  }
  const cube = number * number * number;
  return cube;
}

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" && typeof string2 !== "string") {
    const message = console.log("Please enter strings in both");
    return message;
  } else if (typeof string1 !== "string") {
    const message = console.log("Please enter string in string1");
    return message;
  } else if (typeof string2 !== "string") {
    const message = console.log("Please enter string in string2");
    return message;
  } else {
    const booleanValue = console.log(string1.indexOf(string2) !== -1);
    return booleanValue;
  }
}

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

function findAddress(obj) {
  if (typeof obj.street === "undefined") {
    obj.street = "__";
  }
  if (typeof obj.house === "undefined") {
    obj.house = "__";
  }
  if (typeof obj.society === "undefined") {
    obj.society = "__";
  }

  const objOutput = console.log(
    obj.street + "," + obj.house + "," + obj.society
  );
  return objOutput;
}

function canPay(changeArray, totalDue) {
  if (changeArray.length == 0) {
    return "array is empty";
  }
  let sum = 0;
  for (var i = 0; i < changeArray.length; i++) {
    sum = sum + changeArray[i];
  }
  if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}
