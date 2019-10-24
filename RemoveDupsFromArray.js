const RemoveDup = arr => {
  let larNum = arr[0];
  let pastNums = [];
  
  for(let i = 0; i < arr.length; i++){
    larNum = larNum > arr[i] ? larNum : arr[i];
    
    if(pastNums.indexOf(arr[i]) != -1){
      arr.splice(i, 1);
      i--;
      continue;
    }
    pastNums.push(arr[i]);
  }
 
  return larNum;
}