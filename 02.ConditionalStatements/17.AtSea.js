function solve(days, roomType, assessment) {
    let pricePerNight = 0;
    let discountPercentage = 0;
    let nights = days - 1;

    switch (roomType) {
        case 'single room':
            pricePerNight = 25;
            break;
        case 'apartment':
            pricePerNight = 50;
            if (nights < 10) {
                discountPercentage = 0.3;
            } else if (nights >= 10 && nights <= 15) {
                discountPercentage = 0.35;
            } else if (nights > 15) {
                discountPercentage = 0.5;
            }
            break;
        case 'presidential':
            pricePerNight = 100;
            if (nights < 10) {
                discountPercentage = 0.1;
            } else if (nights >= 10 && nights <= 15) {
                discountPercentage = 0.15;
            } else if (nights > 15) {
                discountPercentage = 0.2;
            }
            break;
    }
    let priceBeforeDiscount = nights * pricePerNight;
    let stayPriceAfterDiscount = priceBeforeDiscount - (priceBeforeDiscount * discountPercentage);
    let totalPrice = 0;

    if (assessment === 'positive') {
        totalPrice = stayPriceAfterDiscount * 1.25;
    } else if (assessment === 'negative') {
        totalPrice = stayPriceAfterDiscount * 0.9;
    }

    console.log(totalPrice.toFixed(2));
}

solve(11, "apartment", "positive");
solve(30, "presidential", "negative");
solve(12, "single room", "positive");
solve(2, "apartment", "positive");
