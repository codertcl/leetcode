var generateParenthesis = function (n) {
    let res = new Set(['()'])
    for (let i = 2; i <= n; i++) {
        let set = new Set()
        for (let re of res) {
            for (let i = 0; i < re.length; i++) {
                set.add(re.slice(0, i) + '()' + re.slice(i))
            }
        }
        //更新最新结果,每次set对应的i个()结果,而最后返回的是n个(),所以要时刻更新
        res = set
    }
    return [...res]
};
//["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(3))
//["(())","()()"]
console.log(generateParenthesis(2))
// ["()"]
console.log(generateParenthesis(1))
