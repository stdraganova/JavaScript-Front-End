function calculatePrice(groupSize, groupType, dayOfWeek) {
    let price = 0;

    if(groupType === 'Students'){
        switch(dayOfWeek){
            case 'Friday':
                price += 8.45;
                break;
            case 'Saturday':
                price += 9.80;
                break;
            case 'Sunday':
                price += 10.46;
                break;
        }

        if(groupSize >= 30){
            price *= 0.85;
        }

    }else if(groupType === 'Business') {
        switch(dayOfWeek){
            case 'Friday':
                price += 10.90;
                break;
            case 'Saturday':
                price += 15.60;
                break;
            case 'Sunday':
                price += 16;
                break;
        }

        if(groupSize >= 100){
            groupSize -= 10;
        }
    } else if(groupType === 'Regular') {
        switch(dayOfWeek){
            case 'Friday':
                price += 15;
                break;
            case 'Saturday':
                price += 20;
                break;
            case 'Sunday':
                price += 22.50;
                break;
        }
        
        if(groupSize >= 10 && groupSize <= 20){
            price = price * 0.95;
        }
    }

    price *= groupSize;

    console.log('Total price: ' + price.toFixed(2));
}

// calculatePrice(30, 'Students', 'Sunday');
// calculatePrice(40, 'Regular', 'Saturday');