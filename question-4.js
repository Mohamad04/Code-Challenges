const calculateSeatsBookingPercentage = (firstRowSeatsNumber, bookedSeats) => {
  
  if(firstRowSeatsNumber == "" || firstRowSeatsNumber == 0 || firstRowSeatsNumber == undefined)
  return "wrong input";

  var numberOfSeats = (n) => {
    if( n  == 0 )
      return 0;
    
      return   seats = n + numberOfSeats(n-1);    
    
  }
  
  return   Math.round(bookedSeats * 100 / numberOfSeats(firstRowSeatsNumber)) +"%";

}

console.log(calculateSeatsBookingPercentage( 7, 7 ));  
console.log(calculateSeatsBookingPercentage( 10, 20 ));  
console.log(calculateSeatsBookingPercentage(0, 0));  
console.log(calculateSeatsBookingPercentage( ));  