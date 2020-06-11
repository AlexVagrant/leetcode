/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let res = new Array(nums).fill(0);
	if (nums.length === 0) {
		return 0
	}
	res[0] = nums[0];
	res[1] = Math.max(nums[0],nums[1]);
	for (let i = 2; i < nums.length; i++) {
		res[i]=Math.max(0, res[i-1], res[i-2] + nums[i])
	}

	console.log(res)
  return res[nums.length-1]
};
rob([2,7,9,3,1])
rob([1,2,3,1])
