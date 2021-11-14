function americanKeyboard(array) {

    function filter_array(Anotherarray) {
        var length = Anotherarray ? Anotherarray.length : 0,
            result = [];

        for (var i = 0; i < length; i++) {
            if (Anotherarray[i] && typeof Anotherarray[i] === 'string') {
                result.push(Anotherarray[i].toLowerCase())
            }
        }
        return result;
    }

    let filteredArray = filter_array(array),
        row1 = "qwertyuiop",
        row2 = "asdfghjkl",
        row3 = "zxcvbnm",
        output = [];

    filteredArray.forEach(word => {
        let lettersFoundInRow1 = 0,
            lettersFoundInRow2 = 0,
            lettersFoundInRow3 = 0;

        let searchWord =  new Set(word);
        searchWord.forEach(letter => {
            if (row1.includes(letter)) {
                lettersFoundInRow1++;
            }
            if (row2.includes(letter)) {
                lettersFoundInRow2++;
            }
            if (row3.includes(letter)) {
                lettersFoundInRow3++;
            }
        })
        if (lettersFoundInRow1 == searchWord.size || lettersFoundInRow2 == searchWord.size || lettersFoundInRow3 == searchWord.size) {
            output.push(word);
        }
    });
    return output;
}

console.log(americanKeyboard(["Hello", "Alaska", "Dad", "vbmnvcmzx"]));     
console.log(americanKeyboard(["asdfggfjghklASDFFGG", "", -7, false, 0, NaN])); 