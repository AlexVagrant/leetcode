function removeDuplicates(nums: number[]) {
    let current = 0;
    for (let i = 0; i < nums.length; i++ ) {
        if (nums[i] > nums[current]) {
            current += 1;
            nums[current] = nums[i]
        }
    }
    nums = nums.slice(0, current+1)
    return nums.length
}
// let nums = [0,0,1,1,1,2,2,3,3,4]
let nums = [1,1,2]

let res = removeDuplicates(nums);
console.log(res)

