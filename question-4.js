const calculateSeatsBookingPercentage = (firstRowSeatsNumber, bookedSeats) => {
  

  var numberOfSeats = (n) => {

    if( n < 1){
      return 0;
    }else {
      return   seats = n + numberOfSeats(n-1);    
    }
  }
  
  return  Percentage = Math.round(bookedSeats * 100 / numberOfSeats(firstRowSeatsNumber)) +"%";

}

console.log( calculateSeatsBookingPercentage(7, 7) ); // output: 25%
console.log( calculateSeatsBookingPercentage(10, 20) ); // output: 36%