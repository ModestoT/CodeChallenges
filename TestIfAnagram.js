// const isAnagram = (a, b) => {
//   let aObj = {};
//   let bObj = {};

//   for(let i = 0; i < a.length; i++){
//     if(aObj[a[i]]){
//       aObj[a[i]] += 1
//     } else {
//       aObj[a[i]] = 1;
//     }
//   }

//   for(let j = 0; j < b.length; j++){
//     if(bObj[b[j]]){
//       bObj[b[j]] += 1
//     } else {
//       bObj[b[j]] = 1;
//     }
//   }
  
//   for(key in aObj){
//     if(aObj[key] !== bObj[key]){
//       return false
//     }
//   }
//   return true
// }
function anagrams(word, words) {
  console.log("split word",word.split(''))
  console.log("sorted word", word.split('').sort())
  word = word.split('').sort().join('');
  return words.filter(function(v) {
    return word == v.split('').sort().join('');
  });
  // let res = [];
  // // loop through the words array and 
  // // test the string vs the strings in the words array
  // // if they are anagrams add it to the res array
  // // else return an empty array if no matches
  // words.forEach(w => {
  //   if(w === word || w.length === word.length && isAnagram(word, w)){
  //     res.push(w);
  //   }
  // });
  // return res;
}

// console.log(isAnagram("racer", "racer"))
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa'])
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))// => ['carer', 'racer'])
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //=> [])