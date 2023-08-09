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
// function matchFinder(string1, string2) {
//   if (typeof string1 !== "string" && typeof string2 !== "string") {
//     console.log("Please enter strings in both");
//   } else if (typeof string1 !== "string") {
//     console.log("Please enter string in string1");
//   } else if (typeof string2 !== "string") {
//     console.log("Please enter string in string2");
//   } else {
//     const booleanValue = console.log(string1.indexOf(string2) !== -1);
//     return booleanValue;
//   }
// }

// matchFinder("John Doe", "ohn");
// matchFinder("Javascript", "code");
// matchFinder("Peter Parker", "Pen");
// matchFinder("Peter Parker", "pet");
// matchFinder(1, "code");
// matchFinder("Javascript", 1);
// matchFinder(1, 1);

// const matched = [];
// for (i = 0; i < string1.length; i++) {
//   // const name = string1[i];
//   // console.log(name);
//   for (j = 0; j < string2.length; j++) {
//     // const name1 = string2[j];
//     // console.log(name1);
//     if (string1[i] === string2[j]) {
//       matched.push(string2[j]);

//     }
//     // const name1 = string2[j];
//     // console.log(name1);
//   }
// }
// console.log(matched);

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
// sortMaker(arr3); // [4,4] equal
// const arr4 = [1, 2];
// sortMaker(arr4); // [1,2] [2,1]
// const arr5 = [4, -2];
// sortMaker(arr5); // [4,-2]

// Problem 4
function findAddress(obj) {
  // let objStreet = obj.street;
  // let objHouse = obj.house;
  // let objSociety = obj.society;

  if (typeof obj.street === "undefined") {
    obj.street = "__";
  }
  if (typeof obj.house === "undefined") {
    obj.house = "__";
  }
  if (typeof obj.society === "undefined") {
    obj.society = "__";
  }

  const objOutput = console.log(obj.street + ",", obj.house + ",", obj.society);
  return objOutput;
}

const obj1 = { street: 10, house: "15A", society: "Earth" };
findAddress(obj1);
const obj2 = { street: 10, society: "Earth" };
findAddress(obj2);
const obj3 = { street: 10 };
findAddress(obj3);
