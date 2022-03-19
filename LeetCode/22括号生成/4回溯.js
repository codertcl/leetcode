// 一个「合法」括号组合的左括号数量一定等于右括号数量，这个显而易见。
// 对于一个「合法」的括号字符串组合p，必然对于任何0 <= i < len(p)都有：子串p[0..i]中左括号的数量都大于或等于右括号的数量。(通俗一点的意思是说：从左往右算的话，肯定是左括号多嘛，到最后左右括号数量相等，说明这个括号组合是合法的。)
// 其实总体思路也只有一句话，优先选择左括号，只有右括号比左括号剩的多，才去选择右括号；当总数够了就退出
var generateParenthesis = function (n) {
    let res = [];
    // 用leftRemain记录还可以使用多少个左括号，用rightRemain记录还可以使用多少个右括号
    const backtrack = (leftRemain, rightRemain, str) => {
        // 左右括号所剩的数量，str是当前构建的字符串
        if (str.length === n * 2) return res.push(str);
        // 只要左括号有剩，就可以选它，然后继续做选择（递归）
        if (leftRemain > 0) backtrack(leftRemain - 1, rightRemain, str + "(");
        // 只有右括号比左括号剩的多，才能选右括号
        if (rightRemain > leftRemain)
            backtrack(leftRemain, rightRemain - 1, str + ")");
    };
    // 递归的入口，剩余数量都是n，初始字符串是空串
    backtrack(n, n, "");
    return res;
};

console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
