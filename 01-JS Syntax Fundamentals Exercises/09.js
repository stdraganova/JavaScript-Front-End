function calculatePrice(fruit, grams, price) {
    let gramsToKilograms = grams / 1000;
    price *= gramsToKilograms;

    console.log(`I need $${price.toFixed(2)} to buy ${gramsToKilograms.toFixed(2)} kilograms ${fruit}.`);
}

// calculatePrice('orange', 2500, 1.80);
// calculatePrice('apple', 1563, 2.35);