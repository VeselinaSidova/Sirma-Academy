function solve(age, gender) {
    switch (gender) {
        case 'f':
            if (age <= 16) {
                console.log('Miss');
            } else {
                console.log('Ms.');
            }
            break;
        case 'm':
            if (age <= 16) {
                console.log('Master');
            } else {
                console.log('Mr.');
            }
            break;
    }
}

solve(14, "f");
solve(17, "m");
solve(10, "m");
solve(32, "f");
