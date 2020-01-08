const Primality = n => {
  if(n === 2){
    return "Prime"
  } else if (n === 1 || n % 2 === 0){
    return "Not prime"
  }
  for(let i = 3; i < Math.sqrt(n) + 1; i+=2){
    let remainder = n % i;
    if(remainder === 0){
      return "Not prime"
    }
  }
  return "Prime"
}

const arr = [1,2,0,5,11,13,17,6,997]

for(let i = 0; i < arr.length; i++){
  console.log(Primality(arr[i]))
}