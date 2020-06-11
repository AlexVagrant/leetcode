/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid: number[][]) {
  let len = grid.length;
  let childlength = grid[0].length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < childlength; j++) {
      let prep = grid[i][j-1] || 0;
      let current = grid[i][j];
      if (i===0) {
        // console.log(grid[i][j]+prep)
        grid[i][j] = grid[i][j]+prep;
      } else {
        if (j===0) {
          grid[i][j] = current+ grid[i-1][j]
        } else {
          grid[i][j] = Math.min(current+prep, current+grid[i-1][j])
        }
      }
    }
  }
  console.log(grid[len-1][childlength-1]);
  return grid[len-1][childlength-1]
}

let nums = [
  [1,3,1],
  [1,2,1],
  [4,2,1],
];
minPathSum(nums);
