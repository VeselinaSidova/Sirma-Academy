function solve(budget, season) {
    let type = '';
    let location = '';
    let percentace = 0;

    if (budget <= 100) {
        location = 'Bulgaria';
        if (season === 'summer') {
            type = 'Camp';
            percentace = 0.3;
        } else {
            type = 'Hotel';
            percentace = 0.7;
        }
    } else if (budget > 100 && budget <= 1000) {
        location = 'Europe';
        if (season === 'summer') {
            type = 'Camp';
            percentace = 0.4;
        } else {
            type = 'Hotel';
            percentace = 0.8;
        }
    } else if (budget > 1000) {
        location = 'Asia';
        type = 'Hotel';
        percentace = 0.9;
    }

    let totalPrice = budget * percentace;
    console.log(`Somewhere in ${location}`);
    console.log(`${type} - ${totalPrice.toFixed(2)}`);
}

solve(50, "summer");
solve(75, "winter");
solve(312, "summer");
solve(678.53, "winter");
solve(1500, "summer");
