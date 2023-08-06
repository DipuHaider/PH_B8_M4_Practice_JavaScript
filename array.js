const country = "Bangladesh";
const age = 20;
const isIndependent = true;
const student = { id: 9, class: 11, name: "Dave" };
const friends = [13, 14, 15, 16, 17, 18, 19];
function add(num1, num2) {
  return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//Check Array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

//Check if 19 is included in the array
console.log(friends.includes(19));
//Anotyher way
if (friends.indexOf(252) !== -1) {
}

//concat:
const newFriendsAge = [20, 21, 22, 23, 24];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
