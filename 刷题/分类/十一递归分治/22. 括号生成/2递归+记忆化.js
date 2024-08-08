var generateParenthesis = function (n) {
    //记忆化存储n对应的结果
    let res = {1: ['()']}
    const f = (n) => {
        //值存在则直接返回,避免重复计算
        if (res[n]) return res[n]
        let set = new Set()
        for (let re of f(n - 1)) {
            for (let i = 0; i < re.length; i++) {
                set.add(re.slice(0, i) + '()' + re.slice(i))
            }
        }
        //存储结果
        res[n] = Array.from(set)
        return res[n]
    }
    return f(n)
};
//["((()))","(()())","(())()","()(())","()()()"]
debugger
console.log(generateParenthesis(3))
//["(())","()()"]
console.log(generateParenthesis(2))
// ["()"]
console.log(generateParenthesis(1))
