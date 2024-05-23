function solve(vegetable, day, quantity) {
    let price = 0;
    let isWeekEnd = false;

    if (day === 'Monday'
        || day === 'Tuesday'
        || day === 'Wednesday'
        || day === 'Thursday'
        || day === 'Friday'
    ) {
        isWeekEnd = false;

    } else if (day === 'Saturday'
        || day === 'Sunday') {
        isWeekEnd = true;
    } else {
        console.log('error');
        return;
    }

    switch (vegetable) {
        case 'tomato':
            if (isWeekEnd) {
                price = 2.8;
            } else {
                price = 2.5;
            }
            break;
        case 'onion':
            if (isWeekEnd) {
                price = 1.3;
            } else {
                price = 1.2;
            }
            break;
        case 'lettuce':
            price = 0.85;
            break;
        case 'cucumber':
            if (isWeekEnd) {
                price = 1.75;
            } else {
                price = 1.45;
            }
            break;
        case 'pepper':
            if (isWeekEnd) {
                price = 3.5;
            } else {
                price = 5.5;
            }
            break;
        default:
            console.log('error');
            break;
    }
    if (price !== 0) {
        let totalPrice = quantity * price;
        console.log(totalPrice.toFixed(2));
    }
}


solve("tomato", "Tuesday", 2);
solve("onion", "Sunday", 3);
solve("pepper", "Monday", 10);
solve("banana", "Friday", 5);

