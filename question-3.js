const findHighestOrderValue = (orders) => {
	
  let highestOrder = 0;
  let sum;
  let returnIndex;

	if(  orders == 0 || orders == "" || orders == undefined){
		return "wrong input ";
	}

  orders.forEach(function(singleArray, index) {

      sum = singleArray.reduce( function(accumaltor, current) {
      return  accumaltor + current;
  });
  if(sum > highestOrder){
      highestOrder = sum;
      sum =0;
      returnIndex = index;
  }
 });
  return returnIndex;
}

console.log(findHighestOrderValue( [ [2,3,4], [1,2,3] ] ));  
console.log(findHighestOrderValue( [  [1.5], [10, 1], [55], [2, 3] ] ));  
console.log(findHighestOrderValue( [ [] ] ));  
 