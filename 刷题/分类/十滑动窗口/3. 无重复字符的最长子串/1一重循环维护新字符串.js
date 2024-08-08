// var lengthOfLongestSubstring = function (s) {
//     let max = 0, str = '';
//     for (let i = 0; i < s.length; i++) {
//         let index = str.indexOf(s.charAt(i))
//         if (index !== -1) {
//             //更新当前字符串str 将i位置字符加到s最后
//             str = str.slice(index + 1) + s.charAt(i)
//         } else {
//             //不包含i位置字符,则将其添加到str最后,更新max
//             str += s.charAt(i)
//             if (max < str.length) {
//                 max = str.length
//             }
//         }
//     }
//     return max
// };

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let str = "";
    for (let i = 0; i < s.length; i++) {
        const index = str.indexOf(s[i]);
        if (index > -1) {
            str = str.slice(index + 1) + s[i]
        } else {
            str += s[i]
        }
        max = Math.max(max, str.length)
    }
    return max
};

console.log(lengthOfLongestSubstring('dvdf'))//3
console.log(lengthOfLongestSubstring('abcabcbb'))//3
console.log(lengthOfLongestSubstring('bbbbb'))//1
console.log(lengthOfLongestSubstring('pwwkew'))//3
console.log(lengthOfLongestSubstring('pww'))//2
console.log(lengthOfLongestSubstring('dvdf'))//3
