const ReverseString = str => {
  // strings are immuntable in JS so we have to convert string into an array to mutate
  let tempStr = [...str];
  let pointerA = 0; // pointer variable for start of array
  let pointerB = tempStr.length-1; // pointer varaible for end of array
  
  // loop through the array until the pointers meet, swaping the characters along the way
  while(pointerA < pointerB){
    let tempChar = tempstr[pointerA];
    
    tempstr[pointerA] = tempstr[pointerB];
    tempstr[pointerB] = tempChar;
    
    pointerA++;
    pointerB--;
  }
  
  return tempStr.join('');
}
