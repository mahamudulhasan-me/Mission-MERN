function ticketPrice(ticket) {
  const first100Ticket = 100;
  const second100Ticket = 90;
  const restTicket = 70;
  if (ticket <= 100) {
    const ticketPrice = ticket * first100Ticket;
    return ticketPrice;
  } else if (ticket <= 200) {
    const before100 = 100 * first100Ticket;
    const restQuantityTicket = ticket - 100;
    const restTicketPrice = restQuantityTicket * second100Ticket;
    return before100 + restTicketPrice;
  } else {
    const before100 = 100 * first100Ticket;
    const before200 = 100 * second100Ticket;
    const restQuantityTicket = ticket - 200;
    const restTicketPrice = restQuantityTicket * restTicket;
    return before100 + before200 + restTicketPrice;
  }
}

const requireTicket = 220;
console.log(ticketPrice(requireTicket));
