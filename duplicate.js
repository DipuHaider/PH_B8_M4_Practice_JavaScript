const names = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "cabul",
  "gabul",
  "rabul",
  "cabul",
  "abul",
  "babul",
];

function removeDuplicate(names) {
  const unique = [];
  for (i = 0; i < names.length; i++) {
    const name = names[i];
    // console.log(name);
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);
