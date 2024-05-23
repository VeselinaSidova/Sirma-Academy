function daysInMonth(month) {
    if (month === 2) {
        console.log(28);
    } else if (month === 8) {
        console.log(31);
    } else if (month < 8 && month % 2 === 0) {
        console.log(30);
    } else if (month > 8 && month % 2 !== 0) {
        console.log(30);
    } else {
        console.log(31);
    }
}

daysInMonth(1);
daysInMonth(2);
daysInMonth(4);
daysInMonth(7);
