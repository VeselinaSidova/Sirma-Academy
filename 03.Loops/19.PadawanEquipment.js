function padawanEquipment(budget, students, lightsaberPrice, robePrice, beltPrice) {
    let totalRobesPrice = students * robePrice;
    let totalLightsabersPrice = Math.ceil(students * 1.1) * lightsaberPrice;
    let freeBelts = Math.floor(students / 6);
    let totalBeltsPrice = (students - freeBelts) * beltPrice;

    let totalCost = totalRobesPrice + totalLightsabersPrice + totalBeltsPrice;

    if (budget >= totalCost) {
        console.log(`The money is enough - it would cost ${totalCost.toFixed(2)}lv.`);
    } else {
        let neededMoney = totalCost - budget;
        console.log(`George Lucas will need ${neededMoney.toFixed(2)}lv more.`);
    }
}

padawanEquipment(100, 2, 1.0, 2.0, 3.0);
padawanEquipment(100, 42, 12.0, 4.0, 3.0);