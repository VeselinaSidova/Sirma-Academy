function game(right, left) {
    let direction = 'Wander aimlessly';

    if (right === 'sword' || left === 'sword') {
        if (right === 'sheild' || left === 'sheild') {
            direction = 'Path to the castle';
        } else {
            direction = 'Path to the forest';
        }
    } if (right === 'map' || left === 'map') {
        if (right === 'coins' || left === 'coins') {
            direction = 'Go to the town';
        } else {
            direction = 'Camp';
        }
    }

    console.log(direction);
}

game("sword", "shield");
game("map", "coins");
game("torch", "flower");
game("sword", "pouch");
game("map", "compass");
