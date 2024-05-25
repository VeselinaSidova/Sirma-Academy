function caclculateChangeCoins(change) {
    let changeInStotinki = change * 100;
    let coinCount = 0;

    while (changeInStotinki >= 200) {
        changeInStotinki -= 200;
        coinCount++;
    }

    while (changeInStotinki >= 100) {
        changeInStotinki -= 100;
        coinCount++;
    }

    while (changeInStotinki >= 50) {
        changeInStotinki -= 50;
        coinCount++;
    }

    while (changeInStotinki >= 20) {
        changeInStotinki -= 20;
        coinCount++;
    }

    while (changeInStotinki >= 10) {
        changeInStotinki -= 10;
        coinCount++;
    }

    while (changeInStotinki >= 5) {
        changeInStotinki -= 5;
        coinCount++;
    }

    while (changeInStotinki >= 2) {
        changeInStotinki -= 2;
        coinCount++;
    }

    while (changeInStotinki >= 1) {
        changeInStotinki -= 1;
        coinCount++;
    }

    console.log(coinCount);
}

caclculateChangeCoins(1.23);
caclculateChangeCoins(2);
caclculateChangeCoins(0.56);
caclculateChangeCoins(2.73);
