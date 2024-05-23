function timeConverter(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes - (hours * 60);

    console.log(hours.toString().padStart(2, '0') + ":" + remainingMinutes.toString().padStart(2, '0'));

}

timeConverter(60);
timeConverter(90);
timeConverter(325);