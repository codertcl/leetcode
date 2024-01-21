/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0, str = '';
    for (let i = 0; i < s.length; i++) {
        let index = str.indexOf(s.charAt(i))
        if (index !== -1) {
            //更新当前字符串str
            str = str.slice(index + 1) + s.charAt(i)
        } else {
            str += s.charAt(i)
            if (max < str.length) {
                max = str.length
            }
        }
    }
    return max
};

console.log(lengthOfLongestSubstring('abcabcbb'))//3
console.log(lengthOfLongestSubstring('bbbbb'))//1
console.log(lengthOfLongestSubstring('pwwkew'))//3
console.log(lengthOfLongestSubstring('pww'))//2
console.log(lengthOfLongestSubstring('dvdf'))//3
