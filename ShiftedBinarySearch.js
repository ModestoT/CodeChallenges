// Write a function that receives as input a sorted array of integers and a target integer; the function should find the target element in the input array using some form of the binary search algorithm.
// The caveat is that the array has been rotated at some random index. So for example, the input might look like this:
// [19, 27, 28, 33, 39, 41, 46, 49, 2, 5, 6, 10, 13, 14, 15, 17] 
// instead of:
// [2, 5, 6, 10, 13, 14, 15, 17, 19, 27, 28, 33, 39, 41, 46, 49]
// Note how the last eight elements of the sorted array have been moved to the front, but otherwise, the array is entirely sorted.
// Your function should search the input array for the target element using some form of binary search and return the index of the element in the array or -1 if the element is not contained in the array.

const BinarySearch = (arr, tar) => {
  let left = 0,
    right = arr.length - 1;

    while(left <= right){
      let mid = Math.floor(left + (right - left) / 2);
      console.log(mid)
      if(arr[mid] === tar){
        return mid;
      } else if (arr[mid] < tar){
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
}

const findRotation = arr => {
  let left = 0,
    right = arr.length - 1;
  
  while(left < right){
    let mid = Math.floor(left + (right - left) / 2);

    if(arr[mid] > arr[mid+1]){
      return mid;
    } else if (arr[mid] > arr[left]){
      left = mid;
    } else {
      right = mid;
    }
  }
  return -1;
}

const ShiftedBinarySearch = (arr, tar) => {
  //find point of rotation in the array
  const pointOfRotation = findRotation(arr); //should return index of rotation
  console.log("point of rotation",pointOfRotation)
  //split the array at the rotation
  //run binary search on both halves 
  const firstHalf = BinarySearch(arr.slice(0, pointOfRotation + 1), tar);
  const secondHalf = BinarySearch(arr.slice(pointOfRotation + 1), tar);
  //return the results from both searches
  if(firstHalf !== -1) return firstHalf;
  if(secondHalf !== -1) return secondHalf + pointOfRotation + 1;

  return -1;
}

// console.log(findRotation([13, 14, 15, 17, 18, 19, 27, 28, 33, 39, 41, 1, 2, 5, 6, 10])) // should return 10

// console.log(BinarySearch([2, 5, 6, 10, 13, 14, 15, 17, 19, 27, 28, 33, 39, 41, 46, 49], 39)) //should return 12

// console.log(BinarySearch([19, 27, 28, 33, 39, 41, 46, 49], 41)) // return 5 

console.log(ShiftedBinarySearch([19, 27, 28, 33, 39, 41, 46, 49, 2, 5, 6, 10, 13, 14, 15, 17], 14)); //should return 13