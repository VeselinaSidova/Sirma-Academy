function dayOfWeek(n) {
    const daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    if (daysOfWeek[n - 1]) {
        console.log(daysOfWeek[n - 1]);
    } else {
        console.log('Invalid day!');
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);