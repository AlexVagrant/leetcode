/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums: Array<number>) {
    let res: number[][] = new Array(nums.length);
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
        res[i] = [];
        // 当前的数据 * 已经选好的下一个数据,
        for(let j = i+1; j < nums.length; j++) {
            if (res[i][j-1] || res[i][j-1] === 0) {
               res[i][j] = nums[j] * res[i][j-1]
            } else {
                res[i][j] = nums[i]*nums[j];
            }
            max = Math.max(max, res[i][j], nums[j])
        }
    }
    // console.info(res)
    console.log(max)
    return max;
}
maxProduct([-4,-3,-2,-1]); // 24
maxProduct([2,3,-1,4]); // 6
maxProduct([3,-1,4]); // 6
maxProduct([2,-5,-2,-4,3]); //24
maxProduct([-2,0,-1])
// 这种方式会超时 需要新的解决方案
export {
    maxProduct,
}
