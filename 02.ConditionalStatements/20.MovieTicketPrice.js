function ticketPrice(age) {
    let childTicket = 5;
    let teenTicket = 8;
    let adultTicket = 10;

    if (age >= 0 && age <= 12) {
        console.log('$' + childTicket);
    } else if (age >= 13 && age <= 19) {
        console.log('$' + teenTicket);
    } else {
        console.log('$' + adultTicket);
    }
}

ticketPrice(10);
ticketPrice(16);
ticketPrice(25);
ticketPrice(13);