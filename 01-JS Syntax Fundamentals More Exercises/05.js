function extractFromSource(startYield) {

    let daysCount = 0;
    let source = 0;

    while (startYield >= 100) {
        source += startYield - 26;

        daysCount++;
        startYield -= 10;
    }

    if(source >= 26){
        source -= 26;
    }else {
        source = 0;
    }
    

    console.log(daysCount);
    console.log(source);
}

//extractFromSource(111);
// extractFromSource(450);