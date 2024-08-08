/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const res = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        // 每行首尾元素为1，所以计算j从1开始，到i-1结束
        for (let j = 1; j < i; j++) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j]
        }
        res.push(row);
    }
    return res;
};

console.log(generate(1)) // [[1]]
console.log(generate(2)) // [[1], [1, 1]]
console.log(generate(3)) // [[1], [1, 1], [[1], [2], [1]]]
console.log(generate(4)) // [[1], [1, 1], [[1], [2], [1]], [1, 3 ,3, 1]]
console.log(generate(5)) // [[1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1]]