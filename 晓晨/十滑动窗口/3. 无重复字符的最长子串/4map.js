var lengthOfLongestSubstring = function (s) {
    let map = new Map(),
        max = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            // abba 此处应该取i和前面重复元素下标+1的较大值
            //map.get(s[j])为当前元素下标字符串中下标，窗口左边界右移
            i = Math.max(map.get(s[j]) + 1, i)
            // i = map.get(s[j]) + 1
            // 避免窗口下限偏左回退，因为窗口下界只能向右移动
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};

console.log(lengthOfLongestSubstring('')) //0
console.log(lengthOfLongestSubstring('abba')) //2
console.log(lengthOfLongestSubstring('aabaab!bb')) //3
console.log(lengthOfLongestSubstring('aab')) //2
console.log(lengthOfLongestSubstring('pwwkew')) //3
console.log(lengthOfLongestSubstring('abcabcbb')) //3
