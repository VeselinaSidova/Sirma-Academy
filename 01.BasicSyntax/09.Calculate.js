function solve(numOne, numTwo) {
    let sum = numOne + numTwo;
    let difference = Math.abs(numOne - numTwo);
    let product = numOne * numTwo;
    let average = (numOne + numTwo) / 2;

    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Average: " + average);
}

solve(25, 5);
solve(7, 14);
solve(12, 1);