function reverseString( input ) {

    if ( input == 0 || input == undefined )
      return "wrong input just try string";
  else {
  
      let result =[];
    let word = "";
  
      for(let i = 0; i < input.length; i++)
      {
              if(input[i] === "")
                  return empty ;
        else if (input[i] !== " ")
          word += input[i];
        else if (input[i] === " "){
          result.push(word);
          word = "";
        }
      }
      result.push(word);
      word = "";
      for (let j = result.length -1; j >= 0; j--){
        word += result[j] + " ";
      }
      return word;
    }
  }

  
  console.log(reverseString( "How are you?") ); 
  console.log(reverseString( "This is me") ); 
  console.log(reverseString( "" ) ); 
  console.log(reverseString( 0 ) ); 
  