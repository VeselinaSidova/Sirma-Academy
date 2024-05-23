function solve(hours, minutes) {
    if (minutes + 15 > 59) {
        minutes = minutes + 15 - 60;
        hours++;
    } else {
        minutes += 15;
    }
    if (hours > 23) {
        hours = 0;
    }
    console.log(hours + ":" + minutes.toString().padStart(2, '0'));
}

solve(1, 47);
solve(0, 2);
solve(23, 59);
//solve(11, 0 7);
solve(12, 48);
