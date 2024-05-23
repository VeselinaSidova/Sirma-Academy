function paintCalc(yellow) {
    let red = yellow / 4;
    let white = yellow * 2;
    let sum = yellow + red + white;

    console.log("Red: " + red);
    console.log("Yellow: " + yellow);
    console.log("White: " + white);
    console.log("Total: " + sum);
}

paintCalc(10);
paintCalc(17);
paintCalc(42);
