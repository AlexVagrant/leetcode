/**
 * @param {string} s
 * @return {boolean}
 */

function isValid (arr: string[]) {
  let start = 0, end = arr.length-1;
  for(let i=0; i < arr.length; i++) {
    if (arr[start] === arr[end]) {
        start++;
        end--;
    } else {
      return false
    }
  }
  return true
}

var validPalindrome = function(s: string) {
  let arr = s.split('');
  let start = 0, end = arr.length-1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[start] === arr[end]) {
      start++;
      end--;
    } else {
      return isValid(arr.slice(start+1, end+1)) || isValid(arr.slice(start, end))
    }
  }
  return true;
}

console.log(validPalindrome('abca'))
console.log(validPalindrome('aebca'))// false
console.log(validPalindrome('"ebcbbececabbacecbbcbe"'))
console.log(validPalindrome('"eeccccbebaeeabebccceea"'))
