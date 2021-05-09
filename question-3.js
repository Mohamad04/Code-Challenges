const findHighestOrderValue = (orders) => {
  var indexArray = 0,
      max = 0;

  for(var i = 0 ; i < orders.length ; i++){        
    var sum = 0;

    for(var j = 0 ; j < orders[i].length ; j++){   
       sum += orders[i][j] ;
    }
    if( max < sum){                                
      max = sum;
      indexArray = i;
    }
  }
 
  return indexArray;

}

console.log( findHighestOrderValue([[19,2,3], [2,3,4],[0,2,3], [10,3,4]]) ); // output: 1
console.log( findHighestOrderValue([[1.5], [2, 3], [10, 1]]) ); // output: 2