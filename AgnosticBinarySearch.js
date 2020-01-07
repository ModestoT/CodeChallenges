// Agnostic Binary Search 
// Binary search that doesn't care if the array is sorted
// in ascending or descending order, array can have duplicates
// return -1 if no target found
const AgnosticBinarySearch = (arr, tar) => {
  let left = 0;
  let right = arr.length - 1;
  // if the two values are the same and is our target no need to loop
  if(arr[left] === arr[right]){
    if(arr[left] === tar){
      return left;
    } else {
      return -1;
    }
  }
  // figure out if the array is in Asc or Desc order
  // check starting index value against the last index value
  // if starting value is less than last value we know the array is in Asc order
  const isAscending = arr[left] < arr[right];
  // based on the order the array is sorted in do the binary search
  if(isAscending){
    return AscendingBinarySearch(arr, tar);
  } else {
    return DescendingBinarySearch(arr, tar);
  }
}

const AscendingBinarySearch = (arr, tar) => {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right){
    let mid = Math.floor(left + (right - left) / 2);
    if(arr[mid] === tar){
      return mid;
    } else if(arr[mid] < tar){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return - 1;
}

const DescendingBinarySearch = (arr, tar) => {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right){
    let mid = Math.floor(left + (right - left) / 2);
    if(arr[mid] === tar){
      return mid;
    } else if(arr[mid] > tar){
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return - 1;
}

const arr = [0,1,2,3,4,5,6,7];
const arr2 = [7,6,5,4,3,2,1,0];
const arr3 = [0,1,1,2,4]
const arr4 = [0,0]
// console.log(AscendingBinarySearch(arr, 2))
// console.log(DescendingBinarySearch(arr2, 2))
console.log(AgnosticBinarySearch(arr2, 4))