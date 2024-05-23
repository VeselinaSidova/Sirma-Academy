function calculateExpenses(lostGames, headsetPrice, mousePrince, keyboardPrice, displayPrice) {
    let trashedHeadsets = 0;
    let trashedMouses = 0;
    let trashedKeyboards = 0;
    let trashedDisplays = 0;

    for (let i = 1; i <= lostGames; i++) {
        if (i % 2 === 0) {
            trashedHeadsets++;
        } if (i % 3 === 0) {
            trashedMouses++;
        } if (i % 2 === 0 && i % 3 === 0) {
            trashedKeyboards++;
        }
    }

    trashedDisplays = Math.floor(trashedKeyboards / 2);

    let headsetsExpenses = trashedHeadsets * headsetPrice;
    let mousesExpenses = trashedMouses * mousePrince;
    let keyboardsExpenses = trashedKeyboards * keyboardPrice;
    let displaysExpenses = trashedDisplays * displayPrice;

    let rageExpenses = headsetsExpenses + mousesExpenses + keyboardsExpenses + displaysExpenses;

    console.log(`Rage expenses: ${rageExpenses.toFixed(2)} lv.`);
}

calculateExpenses(7, 2, 3, 4, 5);
calculateExpenses(23, 12.50, 21.50, 40, 200);