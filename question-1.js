function findNumberOfLikes (inputArray){
    
    if(inputArray.length == 0 )
        return "";
    else if (inputArray.length == 1)
        return inputArray[0] ;
    else if (inputArray.length == 2)
        return inputArray[0] + " and " + inputArray[1] ;
    else 
        return inputArray[0] + ", " + inputArray[1]+", and "+ (inputArray.length  - 2) + " others like your post";

}

console.log( findNumberOfLikes( ['Saleem', 'Osama'] ) );  
console.log( findNumberOfLikes( ['Saleem', 'Ameer', 'Khaled', 'Ahmed'] ) ); 
console.log( findNumberOfLikes( ['Fatima'] ) );  
console.log( findNumberOfLikes( [''] ) );  

// Here we define a array variable to store user input values:
// var arr=[]; 
// /* Then we define a while loop for taking multiple values.
// it takes the value and store the values into an array until 
// the condition is true.But when a user didn't give a value 
// or just give 'q'value short for quit then it breaks the loop 
// and logs  the array into a console interface of webpage.*/
//     while(true){  
//         var input=prompt("Enter the Numbers: ");
//         if(input== null || input== 'q')
//         {
//             break;
//         }
//         arr.push(Number(input));
//     }
//     console.log(arr);
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name ? ", function(name) {
//     rl.question("Where do you live ? ", function(country) {
//         console.log(`${name}, is a citizen of ${country}`);
//         rl.close();
//     });
// });

// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });
