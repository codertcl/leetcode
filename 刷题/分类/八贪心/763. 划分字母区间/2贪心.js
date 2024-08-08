/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const res = []
    let last = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        last[s[i].codePointAt(0) - 97] = i;
    }
    let start = 0, end = 0;
    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, last[s[i].codePointAt(0) - 97]);
        // 找到了当前区间所有同值元素的边界
        if (end === i) {
            res.push(i + 1 - start);
            start = end + 1;
        }
    }
    return res;
};
console.log(partitionLabels("ababcbacadefegdehijhklij")) // [9,7,8]
console.log(partitionLabels("eccbbbbdec")) // [10]
console.log(partitionLabels("aaaaaaa")) // [7]
console.log(partitionLabels("aaabaaacb")) // [9]
console.log(partitionLabels("aaabaaacd")) // [7, 1, 1]
console.log(partitionLabels("ab")) // [1,1]
console.log(partitionLabels("caedbdedda")) // [1,9]