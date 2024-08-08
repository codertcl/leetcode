//使用下标来维护滑动窗口
var lengthOfLongestSubstring = function (s) {
    let max = 0, index = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        //窗口范围为[i,j]
        //首先截取截取的字符串内 判断当前元素的下标
        index = s.substring(i, j).indexOf(s[j])
        if (index !== -1) {//包含该元素 则更新窗口左边界
            i = i + index + 1
        }
        //更新max值
        max = Math.max(j - i + 1, max)
    }
    return max
};

console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring('bbbb'))
console.log(lengthOfLongestSubstring('aabaab!bb'))
console.log(lengthOfLongestSubstring('aab'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbb'))
