/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums: number[]) {
    let res = 0
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res;

};

console.log(singleNumber([4,1,4,3,1,2,2]))
