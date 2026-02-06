let prices = [450, 60, 130, 480];
function calculateTotal(prices) {
    return prices.reduce(function (acc, val) { return acc + val; }, 0);
}
console.log(calculateTotal(prices));
function calculateSum(numA, numB) {
    return numA + numB > 100 ? "Sum: ".concat(numA + numB, " \nSum is greater than 100") : "Sum: ".concat(numA + numB);
}
console.log(calculateSum(25, 76));
