function speedMPS(distance, hours, minutes, seconds) {
    let time = hours * 3600 + minutes * 60 + seconds;
    let speed = distance / time;

    console.log(speed.toFixed(6));
}

speedMPS(100, 1, 20, 20);
speedMPS(2500, 5, 56, 23);
speedMPS(600, 7, 35, 55);