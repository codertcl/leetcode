/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 超时 参考题解 https://leetcode.cn/problems/word-break/solutions/302779/shou-hui-tu-jie-san-chong-fang-fa-dfs-bfs-dong-tai/
var wordBreak = function (s, wordDict) {
    const len = s.length;
    const queue = [0];
    while (queue.length) {
        const start = queue.shift();
        for (let i = start + 1; i <= len; i++) {
            if (wordDict.includes(s.slice(start, i))) {
                if (i < len) queue.push(i)
                else return true
            }
        }
    }
    return false;
};
console.log(wordBreak("leetcode", ["leet", "code"])) // true
console.log(wordBreak("applepenapple", ["apple", "pen"])) // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])) // false