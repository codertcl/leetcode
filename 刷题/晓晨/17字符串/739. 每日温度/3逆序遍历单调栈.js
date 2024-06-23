/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// https://leetcode.cn/problems/daily-temperatures/submissions/541420181/?envType=study-plan-v2&envId=top-100-liked
// 如果当前元素比栈顶大，则让小项逐个出栈，直到当前元素比栈顶小，停止出栈
// 此时的栈顶元素就是当前项右边的第一个比自己大的元素索引，计算距离
// 当前项入栈
var dailyTemperatures = function (t) {
    const res = Array(t.length).fill(0), stack = [];
    for (let i = t.length - 1; i >= 0; i--) {
        while (stack.length && t[i] >= t[stack[stack.length - 1]]) {
            stack.pop(); // 舍弃掉栈中不大于当前元素的 元素
        }
        if (stack.length) res[i] = stack[stack.length - 1] - i;
        stack.push(i);
    }
    return res;
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))