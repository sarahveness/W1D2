function countLetters(input) {
  var letterCountSummary = {};
  var listOfCharacters = input.replace(/ /g, '').split('');
  listOfCharacters.forEach(function(char, index, array){
    if (letterCountSummary[char]) {
      letterCountSummary[char] += 1;
    } else {
       letterCountSummary[char] = 0;
       letterCountSummary[char] += 1;
      }
});
return letterCountSummary;
}

var letterCounts = countLetters("lighthouse in the house");
console.log(JSON.stringify(letterCounts,null,2));