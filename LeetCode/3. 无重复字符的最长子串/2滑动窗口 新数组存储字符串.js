var lengthOfLongestSubstring = function(s) {
    let arr = [], max = 0
    for(let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if(index !== -1) {
            //从索引0开始，删除index+1个元素 即删除重复的一个元素和该元素之前的所有元素 保留后面的元素
            arr.splice(0, index+1);
        }
        arr.push(s.charAt(i));//不管当前元素是否出现  都添加到arr中
        max = Math.max(arr.length, max)
    }
    return max
};

// 解题思路： 使用一个数组来维护滑动窗口
//
// 遍历字符串，判断字符是否在滑动窗口数组里
// 不在则 push 进数组
// 在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
// 然后将 max 更新为当前最长子串的长度
// 遍历完，返回 max 即可
console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring('bbbb'))
console.log(lengthOfLongestSubstring('aabaab!bb'))
console.log(lengthOfLongestSubstring('aab'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log([1,2,3]+" 1234")
