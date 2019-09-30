 
// Roman to Integer
// -------------------
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
 
// Example 1:

// Input: "III"
// Output: 3

// Example 2:

// Input: "IX"
// Output: 9

// Example 3:

// Input: "LVIII"
// Output: 58

// Example 4:

// Input: "MCMXCIV"
// Output: 1994

const RomanToInt = str => {
  // Assuming valid roman numeral string is passed in
  // keep track of the sum of the roman numerals
  // create Hashmap to hold key value pairs for the roman numeral and its integer value
  // if we do calculate the double roman value and add it to the sum 
  // else add the roman numeral to the sum
  let sum = 0; 
  let romanNum = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};

  for(let i = 0; i < str.length; i++){
    // if the current roman numeral value is less than the next roman numeral we have a double roman numeral to calculate
    if(i+1 != str.length && romanNum[str[i]] < romanNum[str[i+1]]){
      sum += ( romanNum[str[i+1]] - romanNum[str[i]] );
      i++;
    } else {
      sum += romanNum[str[i]];
    }
  }
  
  return sum;
} 