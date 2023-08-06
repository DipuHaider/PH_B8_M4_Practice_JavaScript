const friends = [13, 14, 15, 16, 17, 18, 19, 69, 87, 62, 45, 44];
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const partial = friends.splice(2, 5, 99, 111, 222);

console.log(partial);
console.log(friends);
