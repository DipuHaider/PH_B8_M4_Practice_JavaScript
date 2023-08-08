//Feet to inches
const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

//Feet to inches by function
function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const totalFeet = inchToFeet(60);
console.log(totalFeet);

//Miles To Kilometer
function milesToKilometer(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}

const totalKilometer = milesToKilometer(60);
console.log(totalKilometer);
