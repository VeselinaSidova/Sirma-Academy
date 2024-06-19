class Ticket {
    constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function manageTickets(ticketDescriptions, sortCriterion) {
    const tickets = [];

    for (const description of ticketDescriptions) {
        const [destination, price, status] = description.split('|');
        const ticket = new Ticket(destination, parseFloat(price), status);
        tickets.push(ticket);
    }

    tickets.sort((a, b) => {
        if (sortCriterion === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (sortCriterion === 'price') {
            return a.price - b.price;
        } else if (sortCriterion === 'status') {
            return a.status.localeCompare(b.status);
        }
    });

    return tickets;
}

const input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
];

console.log(manageTickets(input, 'destination'));

console.log(manageTickets(input, 'status'));

