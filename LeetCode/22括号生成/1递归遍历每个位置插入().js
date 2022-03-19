var generateParenthesis = function (n) {
    if (n === 1) {
        return ['()']
    }
    //使用set便于去重
    let res = new Set(), t = null
    //递归获取n-1对应答案，遍历该答案中每个元素的每个位置添加()
    let s = generateParenthesis(n - 1)
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= n; j++) {
            t = s[i];//获取当前结果
            res.add(t.slice(0, j) + '()' + t.slice(j))//添加()到该字符串的每一个位置
        }
    }
    //将set转换为数组返回结果
    return [...res]
};

console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
