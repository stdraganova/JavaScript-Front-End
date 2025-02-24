function gladiatorExpenses(lostGamesCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let price = 0;
    let shieldBrokeCount = 0;

    for(let i = 1; i <= lostGamesCount; i++) {
        
        if(i % 2 == 0) {
            price += helmetPrice;
        }

        if(i % 3 == 0){
            price += swordPrice;
        }

        if(i % 6 == 0){
            price += shieldPrice;
            shieldBrokeCount++;
        }

        if(shieldBrokeCount % 2 == 0 && shieldBrokeCount != 0){
            price += armorPrice;
            shieldBrokeCount = 0;
        }
    }

    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}

//gladiatorExpenses(7,2,3,4,5);
//gladiatorExpenses(23,12.50,21.50,40,200);