function building(floors, roomsPerFloor) {
    let building = '';

    for (let floor = floors; floor >= 1; floor--) {
        for (let apartment = 0; apartment < roomsPerFloor; apartment++) {
            if (floor === floors) {
                building += `L${floor}${apartment} `;
            } else if (floor % 2 === 0 && floor !== floors) {
                building += `O${floor}${apartment} `;
            } else if (floor % 2 !== 0 && floor !== floors) {
                building += `A${floor}${apartment} `;
            }
        }
        if (floor > 1) {
            building += '\n';
        }
    }

    console.log(building);
}

building(6, 4);
building(3, 3);
building(4, 4);
