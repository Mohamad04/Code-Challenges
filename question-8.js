let inputOfWords = ["Saleem", "Salim", "Salih", "cola", "sal", "i"];

function autoCompete( searchInput ) {

  if ( searchInput == 0 || searchInput == undefined )
    return "wrong input ";
else {

	let result = [];

  inputOfWords.forEach( word => {
     if (  word.toLocaleLowerCase().search(searchInput) >=  0  )
     result.push( word);
  })
    return result.sort();
  }
}

console.log(autoCompete( "i" ) ); 
console.log(autoCompete( "a") ); 
console.log(autoCompete( "ee" ) ); 
console.log(autoCompete( 0 ) ); 