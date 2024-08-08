/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// 未剪枝的DFS会搜索重复的子树，BFS也一样。思考一下这个用例，BFS是如何重复访问节点的？
// 解决：用一个 visited 数组记录访问过的节点，出列考察一个指针时，存在重复则跳过。
var wordBreak = function (s, wordDict) {
    const len = s.length;
    const queue = [0], visited = Array(len);
    while (queue.length) {
        const start = queue.shift();
        if (visited[start]) continue;
        visited[start] = true;
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