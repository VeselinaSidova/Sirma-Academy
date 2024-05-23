function office(cabinetPrice) {
    let secondCabinet = cabinetPrice * 0.8;
    let thirdCabinet = (cabinetPrice + secondCabinet) * 1.15;
    let totalPrice = cabinetPrice + secondCabinet + thirdCabinet;

    console.log(totalPrice.toFixed(3));
}

office(380);
office(720.50);
office(455.30);