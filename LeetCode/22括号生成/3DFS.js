//剪枝递归
var generateParenthesis = function (n) {
    const res = []
    const fun = (left, right, n, s) => {
        debugger
        if (left === n && right === n) {
            res.push(s)
            return
        }

        if (left < n) fun(left + 1, right, n, s + '(')
        if (left > right) fun(left, right + 1, n, s + ')')
    }

    fun(0, 0, n, '')
    return res
}

// console.log(generateParenthesis(1))
// console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
