/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    // dp[i]表示前i个字符串即长度为i的s[0:i-1]子串是否能拆分成单词。题目求:dp[s.length]
    const len = s.length, dp = new Array(len + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= len ; i++) {
        // 两种方式都可以
        // for (let j = i - 1; j >= 0; j--) {
        for (let j = 0; j < i; j++) {
            if (wordDict.includes(s.slice(j, i)) && dp[j]) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[len]
};
console.log(wordBreak("leetcode", ["leet", "code"])) // true
console.log(wordBreak("applepenapple", ["apple", "pen"])) // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])) // false