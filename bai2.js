function sumNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== 1 && i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum;
}

function sumNumbers1(num1, num2) {
    let sum1 = sumNumbers(num1);
    let sum2 = sumNumbers(num2);
    return sum1 === num2 && sum2 === num1;
}

let num1 = 220;
let num2 = 284;
if (sumNumbers1(num1, num2)) {
    document.write(`${num1} và ${num2} là cặp số thân thiết.`);
} else {
    document.write(`${num1} và ${num2} không phải là cặp số thân thiết.`);
}
