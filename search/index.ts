/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums: number[], target: number): number {
  
  let left = 0;
  let right = nums.length-1;
  while(left <= right) {
    const middle = Math.floor((left+right) / 2);
    if (nums[middle] === target) {
      console.log(middle)
      return middle
    } else if (nums[middle] < target) {
      left = middle+1;
    } else if (nums[middle] > target) {
       right = middle-1; 
    }
  }
  console.log(-1)
  return -1;
};
// 5,9,12
search([-1,0,3,5,9,12], 9)
search([-1,0,3,5,9,12], 2)
search([2,5], 5)