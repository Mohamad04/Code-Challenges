function encryptText(text) {
	
    let code = "";
	
	if(  text == 0 || text == "" || text == undefined){
		return "wrong input ";
	}
	else {

   let arrayOfWords = text.toString().split(" ");

	arrayOfWords = arrayOfWords.filter(word => word !== '');

   arrayOfWords.forEach(function(word) {
       if(word.length % 3 == 0 )
            code += "0";
       else code += "1";
   });

   return code;
	}

}

console.log(encryptText("Saleem"));  
console.log(encryptText("Serhan         I like javascript"));  
console.log(encryptText(0));  
console.log(encryptText( ));  