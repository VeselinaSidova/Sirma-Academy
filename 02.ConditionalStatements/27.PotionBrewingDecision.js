function brewPotion(first, second) {
    let potionToBrew = 'No potion';

    if (first === 'herbs' || second === 'herbs') {
        if (first === 'water' || second === 'water') {
            potionToBrew = 'Health potion';
        } else if (first === 'oil' || second === 'oil') {
            potionToBrew = 'Stealth potion';
        } else {
            potionToBrew = 'Minor stamina potion';
        }
    } if (first === 'berries' || second === 'berries') {
        if (first === 'sugar' || second === 'sugar') {
            potionToBrew = 'Speed potion';
        } else {
            potionToBrew = 'Minor energy potion';
        }
    }

    console.log(potionToBrew);
}

brewPotion("herbs", "water");
brewPotion("herbs", "oil");
brewPotion("herbs", "banana");
brewPotion("berries", "sugar");
brewPotion("berries", "banana");
brewPotion("herbs", "sugar");
brewPotion("sugar", "salt");
