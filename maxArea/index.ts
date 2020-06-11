/**
 * @param {number[]} height
 * @return {number}
 */

// 获取容器之间点的距离
// 最小容器的高度
// 也可以找到最优子解
var maxArea = function(height: number[]) {
  let j = height.length-1;
  let k = 0
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    function getArea(end: number, start: number) {
      // 计算当前容量
      return (end-start) * Math.min(height[start], height[end])
    }
    console.log(k,j)
    max = Math.max(getArea(j,k), max);
    if (height[j] > height[k]) {
      k++
    } else {
      j--
    }
  }

  console.log('max=', max);
  return max;
}

// let nums = [1,8,6,2,5,4,8,3,7]; // 49
// let nums = [1,2,6,2,5,4,8,3,7]; // 36
// let nums = [1,2,4,2,2,4,8,3,7];//24
// let nums = [0,1];//0
let nums = [1,2,1];//2
console.log(maxArea(nums));
