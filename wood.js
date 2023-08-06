/*
fixed per item wood requirements
chair- 3cft
table --10cft
bed --50cft
Vary: quantity
*/

function woodCalculator(chairQty, tableQty, bedQty) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = chairQty * perChairWood;
  const tableWood = tableQty * perTableWood;
  const bedWood = bedQty * perBedWood;

  // console.log(chairQty, tableQty, bedQty);
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const totalWood = woodCalculator(2, 2, 5);
console.log("total wood required: ", totalWood);
