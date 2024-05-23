function climateZone(latitude, hemisphere) {
    let zone = '';

    if (hemisphere === 'S') {
        latitude = Math.abs(latitude);
    }

    if (latitude > 66.5) {
        zone = 'Arctic Zone';
    } else if (latitude >= 23.5 && latitude <= 66.5) {
        zone = 'Temperate Zone';
    } else if (latitude < 23.4 && latitude > 0) {
        zone = 'Tropic Zone';
    } else if (latitude === 0) {
        zone = 'Equator';
    }

    console.log(zone);
}

climateZone(70, "N");
climateZone(45, "S");
climateZone(10, "N");
climateZone(0, "N");
climateZone(-85, "S");
