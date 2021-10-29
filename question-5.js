const findCommonLettersInWords = (words) => {
 
  let commonLetters = {};

  words.forEach(word => {
      new Set(word).forEach(character => {
          if( commonLetters[character])
              commonLetters[character]++;
          else commonLetters[character] = 1;

      });
  });

  console.log(commonLetters);
  let result = [];

  Object.keys(commonLetters).forEach(letter => {
      if(commonLetters[letter] == words.length)
          result.push(letter);
  });

  return result;
} 

console.log(findCommonLettersInWords(["Saleem", "Sodam", "Khaledm"])); 
console.log(findCommonLettersInWords(["Pepsi", "", "pppp"])); 