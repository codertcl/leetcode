var lengthOfLongestSubstring = function (s) {
    if (s.length < 2) {
        return s.length
    }
    let max = 1;
    for (let i = 0; i < s.length - 1; i++) {
        //每轮构建一个以当前字符开始的字符串
        let str = s.charAt(i)
        for (let j = i + 1; j < s.length; j++) {
            ////出现了重复字符情况则该轮循环不必继续 否则会重复
            if (str.includes(s.charAt(j))) {
                break
            } else {
                str += s.charAt(j)
                if (str.length > max) {
                    max = str.length
                }
            }
        }
    }
    return max
}

console.log(lengthOfLongestSubstring('abcabcbb'))//3
console.log(lengthOfLongestSubstring('bbbbb'))//1
console.log(lengthOfLongestSubstring('pwwkew'))//3
console.log(lengthOfLongestSubstring('pww'))//2
console.log(lengthOfLongestSubstring('dvdf'))//3
console.log(lengthOfLongestSubstring('a'))//1
console.log(lengthOfLongestSubstring(''))//0
