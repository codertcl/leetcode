/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 超时 参考题解 https://leetcode.cn/problems/word-break/solutions/302779/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/
var wordBreak = function (s, wordDict) {
    const len = s.length;

    // 判断从start到末尾的子串能否break
    const canBreak = (start) => {
        // //指针越界，s一步步成功划分为单词，才走到越界这步，现在没有剩余子串
        if (start === len) return true;
        // 指针i去划分两部分，for枚举出当前所有的选项i
        // 注意由于slice不包括第二个参数对应的下标的字符，所以i能取到len 且i从start + 1开始 保证能取到start对应的单个字符
        for (let i = start + 1; i <= len; i++) {
            // 前缀部分是单词，且剩余子串能break，返回真
            if (wordDict.includes(s.slice(start, i)) && canBreak(i))
                return true
        }
        return false;
    }
    // 递归的入口，从0到末尾的子串能否break
    return canBreak(0);
};
console.log(wordBreak("leetcode", ["leet", "code"])) // true
console.log(wordBreak("applepenapple", ["apple", "pen"])) // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])) // false