var generateParenthesis = function (n) {
    //使用set便于去重
    let res = new Set(['()'])
    for (let i = 2; i <= n; i++) {
        let set = new Set()
        //遍历当前遍历到n(i)对应的结果集
        for (let element of res) {
            for (let j = 0; j <= element.length; j++) {
                //set来保存并去重n(i+1)结果集
                set.add(element.slice(0, j) + '()' + element.slice(j))//添加()到该字符串的每一个位置
            }
        }
        res = set
    }
    //将set转换为数组返回结果
    return [...res]
};

console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))
