const findCommonLettersInWords = (words) => {

  var arraySameLetters = [];
  for (var i = 0; i < words.length ; i++) {  //saleem soda khaled
    for (var j = 0; j < words[i].length; j++) {  
      var firstLetter = words[i].charAt(j);   // search every letter
      var Enumerate = 0;
      for (var k = 0; k < words.length; k++) {
        if (words[k].includes(firstLetter) == true) {
          Enumerate++;
        }
      }
      if ( Enumerate == words.length) {
        arraySameLetters.push(firstLetter);
      }

    }
  }
function onlyUnique(element, index, selfObject) {
  return selfObject.indexOf(element) === index;
}
var unique = arraySameLetters.filter(onlyUnique);
  return unique;
} 

console.log(findCommonLettersInWords(["Saleem", "Sodam", "Khaledm"])); // output: ['a','m']
console.log(findCommonLettersInWords(["Pepsi", "Kitkat", "Oreo"])); // output: []