function solve(renovation, powders, lipsticks, mascaras, shadows, concealers) {
    let powderEarned = powders * 2.6;
    let lipstickEarned = lipsticks * 3;
    let mascaraEarned = mascaras * 4.1;
    let shadowEarned = shadows * 8.2;
    let concealerEarned = concealers * 2;

    let purchasedProductsCount = powders + lipsticks + mascaras + shadows + concealers;

    let totalEarned = powderEarned + lipstickEarned + mascaraEarned + shadowEarned + concealerEarned;

    if (purchasedProductsCount >= 50) {
        totalEarned = totalEarned * 0.75;
    }

    let totalProfit = totalEarned * 0.9;

    let difference = Math.abs(totalProfit - renovation);

    if (totalProfit >= renovation) {
        console.log(`Yes! ${difference.toFixed(2)} BGN left.`)
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} BGN needed.`)
    }
}


solve(40.8, 20, 25, 30, 50, 10);
solve(320, 8, 2, 5, 5, 1);