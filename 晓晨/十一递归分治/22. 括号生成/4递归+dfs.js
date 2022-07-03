const generateParenthesis = (n) => {
    const res = []; // 输出的结果数组

    const generate = (str, left, right) => {
        // if (str.length === 2 * n) { // 字符串构建完成
        if (left === 0 && right === 0) { // 字符串构建完成
            res.push(str);           // 将字符串加入res
            return;                  // 结束当前递归（结束当前搜索分支）
        }
        if (left > 0) {            // 只要左括号有剩，可以选它，继续递归做选择
            generate(str + '(', left - 1, right);
        }
        if (right > left) {        // 右括号的保有数量大于左括号的保有数量，才能选右括号
            generate(str + ')', left, right - 1);
        }
    };

    generate('', n, n); // 递归的入口，初始字符串是空字符串，初始括号数量都是n
    return res;
};

/**
 * 回溯法(DFS)
 * 把握核心规则：
 *  - 必须是有效组合，则左、右括号一定要小于n, 且右括号的数量要一直小于或等于左括号
 *  - 针对组成的括号字符串的每一个位置字符来说，要么是左括号，要么是右括号, 具体这个位置应该是左还是右，看上面的规则而定
 *  - 所以想到，我可以递归地往每个位置放左和右括号，如果违反了规则，就回溯回去，换一个放，由此想到了回溯算法
 *  - 既然是递归，首先要先想好终止条件，依题可知，如果左右括号的数量都为n的话，即为一个答案了，终止递归，返回即可
 * 解题：left 记录已经放入的左括号的数量; right 记录右括号的数量；str 表示当前组成的字符串
 */
// const generateParenthesis = (n, result = []) => {
//     const backtrack = (left, right, str) => {
//         if (left === n && right === n) return result.push(str)
//         if (left < n) backtrack(left + 1, right, str + "(")
//         if (right < left) backtrack(left, right + 1, str + ")")
//     }
//     backtrack(0, 0, "")
//     return result
// }

//["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(3))
//["(())","()()"]
console.log(generateParenthesis(2))
// ["()"]
console.log(generateParenthesis(1))
