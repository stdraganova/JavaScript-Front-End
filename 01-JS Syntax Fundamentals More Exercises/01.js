function validCheck(x1, y1, x2, y2) {
    // Define a helper function inside to calculate and print validity
    function checkDistance(a1, b1, a2, b2) {
        let distance = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
        console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is ${distance % 1 === 0 ? "valid" : "invalid"}`);
    }

    // Perform the three checks
    checkDistance(x1, y1, 0, 0);
    checkDistance(x2, y2, 0, 0);
    checkDistance(x1, y1, x2, y2);
}

// Test cases
validCheck(3, 0, 0, 4);
validCheck(2, 1, 1, 1);