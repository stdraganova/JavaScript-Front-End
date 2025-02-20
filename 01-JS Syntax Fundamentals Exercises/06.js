function SumOfDigits(number) {
    let numberString = number.toString();
    let sum = 0;

    for(let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }

    console.log(sum);
}

// SumOfDigits(245678);
// SumOfDigits(97561);
// SumOfDigits(543);