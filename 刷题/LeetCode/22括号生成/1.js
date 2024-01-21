var generateParenthesis = function (n) {
    if (n === 1) {
        return ['()']
    }
    let res = new Set();
    let s = generateParenthesis(n - 1)
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            res.add(s[i].slice(0, j) + '()' + s[i].slice(j))
            console.log(res)
        }
    }
    return [...res]
};

// console.log(generateParenthesis(1))
// console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
