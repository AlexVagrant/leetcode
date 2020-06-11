/**
 * 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

	let len = s.length,
	arr = [],
	str = '';
	for (let i = 0; i< len; i++) {
		arr[i] = []
	}
	console.log(arr)
	console.time()

	for (let i = 0; i < len; i++) {
			for (let start = 0; start + i < len; start++) {
				// 设置结束坐标
				const end = start + i;
				if (i === 0) {
					console.log(20, arr, arr[start][end])
					arr[start][end] = true
					console.log(21, arr, start, end);
				} else if (i <=2) {
					if (s[start] === s[end]) {
						arr[start][end] = true
					} else {
						arr[start][end] = false
					}
				} else {
					if (arr[start+1][end-1] && (s[start] === s[end])) {
						arr[start][end] = true
					} else {
						arr[start][end] = false
					}
				}
				if (arr[start][end] && str.length < s.substring(start, end+1).length) {
					console.log(36, start, end)
					str = s.substring(start, end+1)
				}
			}
	}

	console.timeEnd()
	console.log(36, str, arr);
	return str
};


longestPalindrome("abccba")
module.exports = longestPalindrome
