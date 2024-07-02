/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const res = []
    let lastIndex = -1, start = 0;
    for (let i = 0; i < s.length; i++) {
        // 找到了当前区间所有同值元素的边界
        if (lastIndex === i) {
            res.push(i + 1 - start);
            start = i + 1;
            lastIndex = -1;
        } else {
            let curLastIndex = s.lastIndexOf(s[i]);
            // 单个元素，单独构成一个字符串，
            if (curLastIndex === i && curLastIndex >= lastIndex) {
                res.push(1)
                start = i + 1
            } else {
                lastIndex = Math.max(curLastIndex, lastIndex);
            }
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