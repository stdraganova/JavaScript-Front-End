// function wordsToUpperCase(str) {
//     // Remove empty elements and gets all that are not empty string
//     let words = str.split(/[\s,!?\.]+/).filter(word => word !== "")
//         .map(word => word.toUpperCase());

//     // for(let i = 0; i < words.length; i++) {
//     //     words[i] = words[i].toUpperCase();
//     // }

//     console.log(words.join(', '));
// }

// function wordsToUpperCase(text) {

//     let result = text.toUpperCase()
//       .split(/[\W]+/)
//       .filter(w => w.length > 0)
//       .join(", ");
  
//     console.log(result);
//   }
  
  
  function wordsToUpperCase(text) {
    let result = text.toUpperCase()
      .match(/\w+/g)
      .join(', ');
    
    console.log(result);
  }

// wordsToUpperCase('Hi, how are you?');
// wordsToUpperCase('hello');
// wordsToUpperCase('Functions in JS can be nested, i.e. hold other functions');