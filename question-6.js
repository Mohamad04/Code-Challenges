//updated 1 line of code
const averageBooks = (numberOfBoxes, stages) => {
    
    var numberOfBooksInStage,
        allBooks = 0; 

 for (var i =0;i < stages.length; i ++){

   numberOfBooksInStage = (stages[i][1] - stages[i][0] + 1) *stages[i][2] ;
   allBooks += numberOfBooksInStage ;
 }

return  allBooks / (stages.length + 1);
      
}

console.log( averageBooks( 3, [ [1, 2, 3], [2, 3, 5] ] )); // output: 5.333
console.log( averageBooks( 4, [ [1, 3, 4], [3, 4, 4] , [2, 3, 1] ])); // output: 5.5