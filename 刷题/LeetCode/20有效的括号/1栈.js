/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s) {
        //左字符串全部先入栈 右字符来进行判断
        if (pairs.has(ch)) {
            //栈为空则左子符号匹配完，右字符多余 return false
            //栈顶元素和当前右字符对应的左字符不一样 return false
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            //匹配成功 栈顶左字符出栈
            stk.pop();
        } else {
            stk.push(ch);
        }
    }
    return !stk.length;
};
console.log(isValid('()'))//t
console.log(isValid('()[]{}'))//t
console.log(isValid('([)]'))//f
console.log(isValid('(]'))//f
console.log(isValid('{[]}'))//t
