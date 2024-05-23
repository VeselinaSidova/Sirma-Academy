function survive(timeOfDay, environment, item) {
    let action = '';

    if (timeOfDay === 'day') {
        if (environment === 'forest') {
            if (item === 'knife') {
                action = 'Hunt for food';
            } else if (item === 'container') {
                action = 'Collect berries';
            } else {
                action = 'Explore';
            }
        } else if (environment === 'desert') {
            if (item === 'hat') {
                action = 'Search for water';
            } else {
                action = 'Find shade';
            }
        }
    } else if (timeOfDay === 'night') {
        if (environment === 'forest') {
            if (item === 'firestarter') {
                action = 'Make a campfire';
            } else {
                action = 'Climb a tree for safety';
            }
        } else if (environment === 'desert') {
            if (item === 'blanket') {
                action = 'Sleep';
            } else {
                action = 'Keep moving to stay warm';
            }
        }
    }

    console.log(action);
}

survive("day", "forest", "knife");
survive("day", "forest", "container");
survive("night", "forest", "firestarter");
survive("day", "forest", "bag");
survive("night", "desert", "blanket");
survive("day", "desert", "hat");
survive("night", "desert", "sword");
survive("night", "forest", "hat");
