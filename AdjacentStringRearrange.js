const Rearrange = str => {
  // convert the string into an array so that we can mutate it
  // loop through the string
  // check 3 characters each loop to see if we can 
  // swap the adjacent chars so that they are not the same
  let tempStr = [...str];
  for(let i = 0; i < tempStr.length; i++){
    //check the next character to see if it's the same
    if(i+1 != tempStr.length && tempStr[i] === tempStr[i+1]){
      //if they are the same we need to check the third character
      //and swap it
      if(i+2 <= tempStr.length && tempStr[i+2] != tempStr[i+1]){
        let tempChar = tempStr[i+1];
        
        tempStr[i+1] = tempStr[i+2];
        tempStr[i+2] = tempChar;
        i++;
      } else {
        // if the 3 characters are all the same and no other characters to swap with, the string can't be rearranged. Return an empty string
        return "";
      }
      //else check the character in front with it's adjacent character to see if they are the same
    } else if(i+2 <= tempStr.length && tempStr[i+1] === tempStr[i+2]){
      // if they are the same swap with the current character we are at
      let tempChar = tempStr[i];
      
      tempStr[i] = tempStr[i+1];
      tempStr[i+1] = tempChar;
      i++;
    }
    //else do nothing and continue looping
  }
  // return the newly arranged array and convert it into a string
  return tempStr.join('');
}