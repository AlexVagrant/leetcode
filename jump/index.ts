/**
 * 跳跃游戏二
 * @param {number[]} nums
 * @return {number}
 */

var jump = function(nums: number[]) {
  let len = nums.length-1;
  let sum = 0;
  let max = 0;
  let count = 0;
  let maxIndex = 0;
  if (nums.length === 1) return 0;
  while (sum < len) {
    let current = 0;
    sum += maxIndex-sum;
    console.log(`最大下标${maxIndex}`, `前进路程${sum}`)
    // 请求当前最大值的坐标
    count++;
    max = 0;
    console.log(20, len, nums[maxIndex])
    if (sum+nums[maxIndex] >= len) {
      // console.log(nums[maxIndex])
      console.log(`最大的下标=${maxIndex}`, `进行的次数${count}`, `进行的步数${sum}`);
      return count;
    }
    console.log(nums[maxIndex]);
    for (let i = 1; i <= nums[maxIndex]; i++) {
        console.log(26, nums[maxIndex+i], maxIndex+i, max);
      if (nums[maxIndex+i]+(maxIndex+i) >= max) {
        current = maxIndex+i;
        // console.log(22, current)
        max = nums[maxIndex+i]+maxIndex+i;
      }
    }
    // console.log(current);
    maxIndex = current
  }
}

let nums = [2,1,3,1,4];//2
    nums = [2,1,3,1,4,1,1,2]; //3
    nums = [3,4,3,2,5,4,3]; // 3
    nums = [3,2,1,4]; // 1
    nums = [1];
    nums = [5,9,3,2,1,0,2,3,3,1,0,0];//3
    nums = [10,9,8,7,6,5,4,3,2,1,1,0]//2
    console.log(nums);

jump(nums)
