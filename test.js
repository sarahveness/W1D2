
//   P: 2
//   u: 1
//   R: 1
//   L: 1
//   E: 1



function countLetters(input) {
  var letterCountSummary = {};
  var listOfCharacters = input.split('');
  listOfCharacters.forEach(function(char, index, array){
    if (letterCountSummary[char]) {
      letterCountSummary[char] += 1;
    } else {
       letterCountSummary[char] = 0;
       letterCountSummary[char] += 1;
    }
  });
  return letterCountSummary;//   var count = 0;
//   var pos = input.indexOf("p");

//   while (pos !== -1) {
//     count++;
//     pos = input.indexOf("p", pos + 1);
//   }
//    console.log(count);

}

console.log(countLetters("purple"));
// countLetters("purple");
