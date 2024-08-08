var generateParenthesis = function (n) {
    if (n === 1) return ['()']
    let set = new Set(), res = generateParenthesis(n - 1)
    //在n-1对应结果每个元素 每个位置插入()
    for (let re of res) {
        for (let i = 0; i < re.length; i++) {
            set.add(re.slice(0, i) + '()' + re.slice(i))
        }
    }
    return Array.from(set)
};
//["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(3))
//["(())","()()"]
console.log(generateParenthesis(2))
// ["()"]
console.log(generateParenthesis(1))
