var maxVowels = function (s, k) {
    let set = new Set(['a', 'e', 'i', 'o', 'u']), l = 0, r = 0, count = 0
    // 首先计算初始窗口[0,k]中元音字母的个数，然后这个窗口开始向右滑动一格，此时分为三种情况：
    // 右侧新进入窗口的字母为元音字母，左侧移出窗口的字母也是元音字母，这样一进一出抵消掉了
    // 右侧新进入窗口的字母为元音字母，左侧移出窗口的字母非元音字母，此时元音字母个数 + 1
    // 右侧新进入窗口的字母非元音字母，左侧移出窗口的字母为元音字母，此时元音字母个数 - 1
    while (r < k) {
        if (set.has(s[r])) count++
        r++
    }
    let max = count
    //l为0,r为k l为滑动窗口将要移除的下标 r为滑动窗口要移入的位置
    while (r < s.length) {
        if (set.has(s[r])) count++
        if (set.has(s[l])) count--
        l++;
        r++
        if (max < count) max = count
    }
    return max
};

console.log(maxVowels('abciiidef', 3))//3
console.log(maxVowels('aeiou', 2))//2
console.log(maxVowels('leetcode', 3))//2
console.log(maxVowels('rhythms', 4))//0
console.log(maxVowels('tryhard', 4))//1

