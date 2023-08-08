//Add All number of an array
function getSumOfAnArray(numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}

const myNumbers = [12, 34, 54, 26, 17, 11, 91, 21, 32];

getSumOfAnArray(myNumbers);

//Add All odd number of an array
function getSumOddNumbersOfAnArray(numbers) {
  //   console.log(numbers);
  const oddNumbers = [];
  for (var i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      console.log(index, element);
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const myNumbersOdd = [12, 34, 54, 26, 17, 11, 91, 21, 32];
const oddNumbers = getSumOddNumbersOfAnArray(myNumbersOdd);
console.log(oddNumbers);
const oddNumberSum = getSumOfAnArray(oddNumbers);
console.log(oddNumberSum);
