/**
 * @param {number[]} nums
 * @return {number}
 */
//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// keywords 连续子数组
var maxSubArray = function(nums) {
  let res = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++ ) {
    if (sum > 0) {
      // 保持增长
      sum += nums[i]
    } else {
      //否则就重置
      sum = nums[i]  
    } 
    // 保存最大值
    res = Math.max(sum, res)
  }
  return res;
};

const s = maxSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(s);
module.exports = maxSubArray;
