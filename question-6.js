
const averageBooks = (numberOfBoxes, stages) => {

  var allBooks = 0;
  for (var i = 0; i < stages.length; i++) {
    var boxesInOneStage = (numberOfBoxes - stages[i][0] + 1) * stages[i][stages[i].length - 1];
    allBooks += boxesInOneStage;
  }
  return allBooks / (stages.length + 1);
}

console.log(averageBooks(3, [[1, 2, 3], [2, 3, 5]]));            // output: 5.333
console.log(averageBooks(4, [[1, 3, 4], [3, 4, 4], [2, 3, 1]])); // output: 5.5