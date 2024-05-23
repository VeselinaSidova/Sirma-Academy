function bill(units, rate) {
    let totalBill = (units * rate) + 10;
    console.log(totalBill.toFixed(2));
}

bill(100, 1.0);
bill(200, 1.0);
bill(150, 1.1);