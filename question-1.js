function findNumberOfLikes (inputArray){
    
    if(inputArray.length == 0 )
        return '';
    else if (inputArray.length == 1)
        return inputArray[0] ;
    else if (inputArray.length == 2)
        return inputArray[0] + " and " + inputArray[1] + " like your post";
    else 
        return inputArray[0] + ", " + inputArray[1]+", and "+ (inputArray.length-2) + " others like your post";


}

console.log(findNumberOfLikes( ['Saleem', 'Osama'] ));  // Saleem and Osama
console.log(findNumberOfLikes( ['Saleem', 'Ameer', 'Khaled', 'Ahmed'] ));  // Saleem, Ameer, and 2 others like your post
console.log(findNumberOfLikes( ['Fatima'] ));  
console.log(findNumberOfLikes( [''] ));  