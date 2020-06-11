/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function sortArr(sort: number[]): number[] {
  if (sort.length <=1) return sort;
  let left = [];
  let right = [];
  const middle = Math.floor(sort.length/2);
  let mid = sort.splice(middle,1)[0];

  for (let i = 0; i < sort.length; i++) {
    if (sort[i] <= mid) {
      left.push(sort[i])
    } else  {
      right.push(sort[i])
    }
  }
  return sortArr(left).concat(mid, sortArr(right));
}

var findMedianSortedArrays = function(nums1: number[], nums2: number[]) {
  let arr = sortArr([...nums1, ...nums2]);
  let mid = Math.floor(arr.length/2);
  let status= arr.length%2;
  console.log(arr)
  if (!status) {
    return (arr[mid]+arr[mid-1])/2
  } else {
    return arr[mid]
  }
};

let nums1 = [0,0];
let nums2 = [0,0];
findMedianSortedArrays(nums1, nums2);
