function checkIfArmstrongNumber(n) {
    let numberInString = n.toString();
    let digitsResult = 0;

    for (let i = 0; i < numberInString.length; i++) {
        digitsResult += Number(numberInString[i]) ** numberInString.length;
    }

    let isArmstrong = false;

    if (n === digitsResult) {
        isArmstrong = true;
    }

    console.log(isArmstrong);
}

checkIfArmstrongNumber(153);
checkIfArmstrongNumber(370);
checkIfArmstrongNumber(123);
checkIfArmstrongNumber(407);
checkIfArmstrongNumber(1634);
