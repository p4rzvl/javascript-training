let prices: number[] = [450, 60, 130, 480];

function calculateTotal(prices: number[]): number {
    return prices.reduce((acc, val) =>  acc+ val, 0);
}

console.log(calculateTotal(prices));


function calculateSum(numA: number, numB: number) : string {
    return numA + numB > 100 ? `Sum: ${numA + numB} \nSum is greater than 100` : `Sum: ${numA + numB}`;
}

console.log(calculateSum(25, 76));
