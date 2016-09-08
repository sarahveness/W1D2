function countLetters(input) {
  var letterCountSummary = {};

  var listOfCharacters = input.replace(/ /g, '').split('');
  for (var i = 0; i < listOfCharacters.length; i++) {
    var char = listOfCharacters[i];

    if (typeof letterCountSummary[char] !== typeof []) {
      // object[key] = value;
      letterCountSummary[char] = [];
    }
    letterCountSummary[char].push(i);
  }

  return letterCountSummary;
}
console.log(countLetters("lighthouse in da house"));
