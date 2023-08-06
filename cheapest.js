const phones = [
  {
    name: "Samsung",
    camera: 12,
    storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "Walton",
    camera: 12,
    storage: "32gb",
    price: 42000,
    color: "silver",
  },
  {
    name: "iPhone",
    camera: 12,
    storage: "32gb",
    price: 66000,
    color: "silver",
  },
  {
    name: "Xiaomi",
    camera: 12,
    storage: "32gb",
    price: 22000,
    color: "silver",
  },
  {
    name: "Nokia",
    camera: 12,
    storage: "32gb",
    price: 44000,
    color: "Black",
  },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    // console.log(phone);
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);
