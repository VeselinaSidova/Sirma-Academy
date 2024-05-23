function luggageCharges(weight, dimensions) {
    let isOverweight = false;
    let isOversized = false;
    let overSizedType = '';
    let charges = 0;

    if (weight > 50) {
        isOverweight = true;
        charges += 100;
    } if (dimensions > 158) {
        isOversized = true;
        let oversize = dimensions - 158;
        if (oversize <= 20) {
            charges += 50;
            overSizedType = 'Slightly oversize';
        } else if (oversize > 20 && oversize <= 50) {
            charges += 100;
            overSizedType = 'Oversize';
        } else {
            charges += 200;
            overSizedType = 'Oversize';
        }
    }

    if (isOverweight && !isOversized) {
        console.log(`$${charges} (Overweight)`);
    } else if (isOversized && !isOverweight) {
        console.log(`$${charges} (${overSizedType})`);
    } else if (isOversized && isOverweight) {
        charges += 50;
        console.log(`$${charges} (Overweight + ${overSizedType} + Handling)`);
    }
}


luggageCharges(52, 160);
luggageCharges(48, 180);
luggageCharges(55, 190);
