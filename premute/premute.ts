/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums: number[]): number[][] {
	let res: number[][] = [];
	let n = nums.length;

	function backtrack(path: number[], i: number) {
		if (path.length === n) {
			res.push(path)
		}
		for (let j = 0; j < n; j++) {
			if (path.indexOf(nums[j]) === -1) {
				path.push(nums[j]);
				backtrack(path.slice(0), j+1)
				path.pop();
			}
		}
	}
	backtrack([], 0);
	return res;
};

export {
	permute
}