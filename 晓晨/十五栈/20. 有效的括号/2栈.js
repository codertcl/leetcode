/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2) return false
    let map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ])
    let stack = []
    for (let ch of s) {
        //遇到右符号
        if (map.has(ch)) {
            //当前栈为空或者当前栈顶元素不是该右括号对应的左符号且遇到了右符号 匹配失败
            if (!s.length || map.get(ch) !== stack[stack.length - 1]) {
                return false
            }
            //当前栈顶的左字符和当前遍历到右字符匹配成功,则从栈中删除栈顶元素左字符
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    //所有元素遍历完成但栈中仍有左字符 则匹配失败
    return !stack.length
};