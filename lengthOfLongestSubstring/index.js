/**
 * @param {string} s
 * @return {number}
 */

 const lengthOfLongestSubstring = (s) => {
 	let arr = s.split(""),
 	len = arr.length,
 	num = len === 0 ? 0 : 1
 	str = '';
 	for (let i = 0; i < len; i++) {
		if (!str) {
			str = arr[i]
		}
		const sarr = str.split("")
		const f = sarr.indexOf(arr[i]);
		// 有重复的字符串
		if (f > -1) {
			// console.log(str, num);
			// 记录当前长度
			num = str.length > num ? str.length : num;
			// 对当前字符串进行处理
		  	str = sarr.slice(f+1).join("")+arr[i]
			console.log(str)
		} else {
		  str += arr[i]
		}
	}
	return Math.max(str.length, num);
}

lengthOfLongestSubstring("aabaab!bb")
module.exports = lengthOfLongestSubstring
