function publicBusFare(peoples) {
  let busCapacity = peoples % 50;
  let microCapacity = busCapacity % 11;
  let publicTicketFare = 250;
  let restFare = microCapacity * publicTicketFare;

  return restFare;
}
console.log(publicBusFare(50));
console.log(publicBusFare(55));
console.log(publicBusFare(112));
console.log(publicBusFare(235));
