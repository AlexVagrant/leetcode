/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s: string) {
  let reg = /\W*/gi;
  let arr = s.replace(reg, '').toLowerCase();
  let start=0,end=arr.length-1;
  while (start<=end) {
    if (arr[start] === arr[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(""))
