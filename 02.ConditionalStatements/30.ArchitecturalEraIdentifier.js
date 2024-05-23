function eraIdentifier(year, material) {
    let era = '';

    if (year < 500 && material === 'stone') {
        era = 'Ancient';
    } else if (year >= 500 && year <= 1500 && material === 'stone') {
        era = 'Medieval';
    } else if (year >= 1500 && year <= 1800 && material === 'wood') {
        era = 'Colonial';
    } else if (year >= 1800 && year <= 1900 && material === 'steel') {
        era = 'Industrial';
    } else if (year > 1900 && material === 'steel') {
        era = 'Modern';
    } else {
        era = 'Uncertain';
    }

    console.log(era);
}

eraIdentifier(300, "stone");
eraIdentifier(1500, "wood");
eraIdentifier(1500, "stone");
eraIdentifier(2000, "steel");
eraIdentifier(1100, "wood");
