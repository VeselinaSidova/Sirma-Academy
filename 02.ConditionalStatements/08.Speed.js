function checkSpeed(speed) {
    if (speed > 0 && speed <= 10) {
        console.log('slow');
    } else if (speed > 10 && speed <= 60) {
        console.log('average');
    } else if (speed > 60 && speed <= 120) {
        console.log('fast');
    } else if (speed > 120 && speed <= 160) {
        console.log('super-fast');
    } else if (speed > 160) {
        console.log('turbo-fast');
    }
}

checkSpeed(10);
checkSpeed(59);
checkSpeed(120);
checkSpeed(121);
checkSpeed(183);
checkSpeed(59.99);
checkSpeed(60.001);
