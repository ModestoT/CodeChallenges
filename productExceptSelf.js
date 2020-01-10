//example: passed in array nums = [1,2,3,4]
//sequence goes:
//i = 0, j = 3, left = 1, right = 1 
//res[i] = res[i] * left (1 * 1) // res[0] = 1
//res[j] = res[j] * right (1 * 1) // res[3] = 1
//res array is now [1,1,1,1]
//left changes to: left = nums[i] * left (1 * 1) // 1
//right changes to: right = nums[j] * right (4 * 1) // 4 
//second loop i = 1, j = 2, left = 1, right = 4: 
//res[i] = res[i] * left (1 * 1) // 1
//res[j] = res[j] * right (1 * 4) // 4
//res array is now [1,1,4,1] 
//left changes to: left = nums[i] * left (2 * 1) // 2
//right changes to: right = nums[j] * right (3 * 4) // 12
//third loop i = 2, j = 1, left = 2, right = 12
//res[i] = res[i] * left (4 * 2) // 8
//res[j] = res[j] * right (1 * 12) // 12
//res array is now [1,12,8,1]
//left changes to: left = nums[i] * left (3 * 2) // 6
//right changes to: right = nums[j] * right (2 * 12) // 24
//final loop i = 3, j = 0, left = 6, right = 24
//res[i] = res[i] * left (1 * 6) // 6
//res[j] = res[j[ * right (1 * 24) // 24
//res array is now [24,12,8,6] 

const productExceptSelf = nums => {
    let res = Array(nums.length).fill(1);//[1,1,1,1]
    let left = 1;//left multiplier
    let right = 1;//right multiplier

    //loop through n times multiplying by the left and right multipliers
    //while updating the left/right multipliers by multiplying the nums[i/j] element
    for(let i = 0; i < nums.length; i++){
        const j = nums.length - 1 - i; //pointer for the right side of the array

        res[i] *= left;
        res[j] *= right;
        left *= nums[i];
        right *= nums[j];
    }
    return res;
};

console.log(productExceptSelf([1,2,3,4])) //should be [24,12,8,6]