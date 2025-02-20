function reverseString(char1, char2, char3) {
    let string ='' + char1 + char2 + char3;
    let stringReversed = string.split('').reverse().join(' ');

    console.log(stringReversed);
}

// reverseString('A', 'B', 'C');