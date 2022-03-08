/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    while (true) {
        //记录当前长度
        let l = s.length
        //将能匹配的数据进行替换
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
        //判断长度是否变化
        if (s.length === l) {
            return l === 0 //长度未改变则还有字符返回false 否则返回true
        }
    }
};
console.log(isValid('()'))//t
console.log(isValid('()[]{}'))//t
console.log(isValid('([)]'))//f
console.log(isValid('(]'))//f
console.log(isValid('{[]}'))//t
