/*
if ticket number is less than 100, then per ticket price : 100
if ticket number is more than 100 but less than 200, then per ticket price : 90
if ticket number is more than 200+ than price will be 70
*/

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;

  if (ticketQuantity <= 100) {
    const price = first100Rate * ticketQuantity;
    return price;
  } else if (ticketQuantity <= 200) {
    // const price = second100Rate * ticketQuantity;
    // return price;
    const first100Price = 100 * first100Rate;
    const restTicketQty = ticketQuantity - 100;
    const restTicketPrice = 90 * restTicketQty;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    // const price = restTicketRate * ticketQuantity;
    // return price;
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQty = ticketQuantity - 200;
    const restTicketPrice = restTicketRate * restTicketQty;
    const totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
  }
}

const total = ticketPrice(210);
console.log("total ticket price is: ", total);
