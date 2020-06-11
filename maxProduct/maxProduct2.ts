/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums:number[]) {
  let max = nums[0];
  let min = nums[0];
  let imax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]<0) {
      let tmp = max;
      max = min;
      min = tmp;
    }
    max = Math.max(max*nums[i], nums[i]);
    min = Math.min(min*nums[i], nums[i]);

    imax = Math.max(max, imax);

  }
  console.log(imax)
  return imax ;
};


// maxProduct([-4,-3,-2,-1]); // 24
// maxProduct([2,3,-1,4]); // 6
// maxProduct([3,-1,4]); // 4
// maxProduct([2,-5,-2,-4,3]); //24
// maxProduct([-2,0,-1]);
// maxProduct([0,2])//2
// maxProduct([-2])//-2
maxProduct([1,0,-1,2,3,-5,-2]) //60


export {
  maxProduct
}
