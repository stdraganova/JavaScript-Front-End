function cookingByNumbers(numberString, operation1, operation2, operation3, operation4, operation5) {
    let number = parseInt(numberString);
    let operationsList = [operation1, operation2, operation3, operation4, operation5];

    for(let i = 0; i < 5; i++){
        switch(operationsList[i]){
            case 'chop':
                number /= 2; 
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.80;
                break;
        }

        console.log(number);
    }
}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet');