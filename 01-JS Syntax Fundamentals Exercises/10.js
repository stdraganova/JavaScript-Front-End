function sameNumber(number) {
    let numberString = number.toString();
    let isSame = true;
    let sum = 0;

    for(let i = 0; i < numberString.length; i++){
        if(numberString[i] != numberString[i + 1] && i < numberString.length - 1) {
            isSame = false;
        }

        sum += parseInt(numberString[i]);
    }

    if(isSame){
        console.log('true');
    }else {
        console.log('false');
    }

    console.log(sum);
}

// sameNumber(2222222);
// sameNumber(1234);