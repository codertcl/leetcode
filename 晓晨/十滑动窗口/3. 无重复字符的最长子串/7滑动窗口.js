var lengthOfLongestSubstring = function (s) {
    let window = {}, left = 0, right = 0, max = 0
    while (right < s.length) {
        //即将移入窗口的字符
        let a = s[right]
        right++//窗口右移
        //计算右边界字符个数
        window[a] = (window[a] || 0) + 1
        //当window[c]值大于 1 时，说明窗口中存在重复字符，
        // 不符合条件，就该移动left缩小窗口
        while (window[a] > 1) {
            let b = s[left]
            left++
            window[b]--;
        }
        max = Math.max(right - left, max)
    }
    return max
};

console.log(lengthOfLongestSubstring('abcabcbb'))//3
console.log(lengthOfLongestSubstring('bbbbb'))//1
console.log(lengthOfLongestSubstring('pwwkew'))//3
console.log(lengthOfLongestSubstring('pww'))//2
console.log(lengthOfLongestSubstring('dvdf'))//3
