function reverseString(string) {

    var portion = "",
        splitArray = [];


    for (var i = 0; i < string.length ; i++) { 

        if (string[i] != " "){
            portion += string[i]; 
        }else {
            splitArray.push(portion);
            portion = "";
        }
    }

    splitArray.push(portion);
    portion = "";

    for (var j = splitArray.length -1; j >= 0 ; j--) {
        portion += splitArray[j] + " ";
    } 
    return portion;
    
    }


console.log(reverseString("How are you?")); // output:you? are How
console.log(reverseString("This is me"));   // output:me is This 