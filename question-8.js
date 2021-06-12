var storageNames = ['Saleem', 'Salim', 'Salih', 'MOHaMMad'];


function autoComplete(input) {
    input.toLowerCase();
    storageNames.sort();

    let output = [];

    storageNames.forEach(word => {
        Array.from(word).forEach(letter => {

            let final = input.length + word.indexOf(letter);
            let start = word.indexOf(letter);
            let firstLetters;


         if (final <= word.length ) {
                firstLetters = word.toLowerCase().slice(start, final);
            }

            if (firstLetters == input) {
                output.push(word);
            }
        })
    });

    return  Array.from(new Set(output));
}

console.log(autoComplete('s'));   // [‘Saleem’, ‘Salih’, ‘Salim’]
console.log(autoComplete('sali'));  // [‘Salih’, ‘Salim’]
console.log(autoComplete('d'));    // [MOHaMMad]
