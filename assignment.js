// problem 1
/*
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a number";
  }
  const cube = number * number * number;
  return cube;
}

const resultantCube = cubeNumber(4);
console.log(resultantCube);/*
*/

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

matchFinder("John Doe", "ohn");
// matchFinder("Javascript", "code");
// matchFinder("Peter Parker", "Pen");
// matchFinder("Peter Parker", "pet");
// matchFinder(1, "code");
// matchFinder("Javascript", 1);
// matchFinder(1, 1);

// return string1.indexOf(string2) !== -1;
//     // return booleanValue;
//   }
// }

// console.log(matchFinder("John Doe", "ohn"));

// Problem 3
// function sortMaker(arr) {
//   let a = arr[0];
//   let b = arr[1];

//   if (a === b) {
//     console.log("equal");
//   } else if (a > 0 && b > 0) {
//     // console.log("both are positive");
//     // sortArr = arr.sort((a, b) => b - a);
//     if (a < b) {
//       [a, b] = [b, a];
//       const sortedArr = console.log([a, b]);
//       return sortedArr;
//     } else {
//       //console.log(arr);
//       const unsortedArr = console.log([a, b]);
//       return unsortedArr;
//     }
//     // console.log(a, b);
//   } else if (a < 0 || b < 0) {
//     console.log("Invalid Input");
//   }
// }

// const arr1 = [2, 3];
// sortMaker(arr1); // [2,3] [3,2]
// const arr2 = [4, 2];
// sortMaker(arr2); // [4,2] [4,2]
// const arr3 = [4, 4];
// const a = sortMaker(arr3); // [4,4] equal
// console.log(a);
// const arr4 = [1, 2];
// sortMaker(arr4); // [1,2] [2,1]
// const arr5 = [4, -2];
// const b = sortMaker(arr5); // [4,-2] Invalid Input
// console.log(b);

// Problem 4
// function findAddress(obj) {
//   // let objStreet = obj.street;
//   // let objHouse = obj.house;
//   // let objSociety = obj.society;

//   if (typeof obj.street === "undefined") {
//     obj.street = "__";
//   }
//   if (typeof obj.house === "undefined") {
//     obj.house = "__";
//   }
//   if (typeof obj.society === "undefined") {
//     obj.society = "__";
//   }

//   const objOutput = console.log(
//     obj.street + "," + obj.house + "," + obj.society
//   );
//   return objOutput;
// }

// const obj1 = { street: 10, house: "15A", society: "Earth" };
// findAddress(obj1);
// const obj2 = { street: 10, society: "Earth" };
// findAddress(obj2);
// const obj3 = { street: 10 };
// findAddress(obj3);

// Problem 5
// function canPay(changeArray, totalDue) {
//   if (changeArray.length == 0) {
//     return "array is empty";
//   }
//   let sum = 0;
//   for (var i = 0; i < changeArray.length; i++) {
//     sum = sum + changeArray[i];
//   }
//   if (sum >= totalDue) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const val1 = 10;
// const arr1 = [1, 2, 5];
// // canPay(arr1, val1); // false
// const a = canPay(arr1, val1); // false
// console.log(a);

// const val2 = 10;
// const arr2 = [1, 5, 5];
// // canPay(arr2, val2); //true
// const b = canPay(arr2, val2); //true
// console.log(b);

// const val3 = 10;
// const arr3 = [];
// // canPay(arr3, val3); //array is empty
// const c = canPay(arr3, val3); //array is empty
// console.log(c);
