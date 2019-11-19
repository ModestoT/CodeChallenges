// Search In Sorted Matrix
// Given a matrix (a two-dimensional array), whose width and height do not necessarily match, containing distinct integers where each row is sorted and each column is also sorted, write a function that searches for a target value in the matrix. The function should return a tuple (or two-element array) of the row and column indices of the target value. If the target value is not found in the array, the function should return [-1, -1].

// Sample input: 45,

// [
//     [1, 4, 7, 12, 15, 997, 999],
//     [2, 5, 19, 32, 35, 1001, 1007],
//     [4, 8, 24, 34, 36, 1008, 1015],
//     [40, 41, 42, 44, 45, 1018, 1020],
//     [98, 99, 101, 104, 190, 1021, 1025],
// ]
// Expected output: [3, 4]

// Analyze the space and time complexity of your solution.

const BinarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;
  // figure out mid point
  // decide to go left or right from mid point to find target
  while(left < right){
    let mid = Math.floor(left + (right - left) / 2);
    if(arr[mid] === target){
      return mid;
    } else if(arr[mid] < target) {
      // if target is greater than the current mid value continue right
      left = mid + 1;
    } else {
      right = mid;
    } 
  }
  return -1
}

const SearchMatrix = (matrix, tar) => {
  //traverse through the matrix looking at each row
  //traverse the row looking for the target value
  for(let r = 0; r < matrix.length; r++){
    let row = matrix[r];
    //figure out which col our target is in
    const col = BinarySearch(row, tar);
    if(col !== -1){
      //return array with both row and col ex [1,4]
      return [r, col];
    }
  }

  //return -1 if not target found
  return [-1, -1];
};

const matrix = [
    [1, 4, 7, 12, 15, 997, 999],
    [2, 5, 19, 32, 35, 1001, 1007],
    [4, 8, 24, 34, 36, 1008, 1015],
    [40, 41, 42, 44, 45, 1018, 1020],
    [98, 99, 101, 104, 190, 1021, 1025],
];

console.log(SearchMatrix(matrix, 1015));
const arr = [1,2,4,6,10,15];
// console.log(BinarySearch(arr, 4));