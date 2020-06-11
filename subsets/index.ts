/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums: number[]): number[][] {
	let res: number[][] = [];
	let n = nums.length;

	function backtrack(path: number[], num: number) {
		if (num <= n) {
			res.push(path);
		}
		for (let i = num; i < n; i++) {
			path.push(nums[i]);
			console.log('push', path)
			backtrack(path.slice(0), i+1)
			console.log('pop',path, num);
			path.pop(); // 当前循环会执行一次pop
		}
 	}
	backtrack([], 0)
	return res;
};

export {
	subsets	
}