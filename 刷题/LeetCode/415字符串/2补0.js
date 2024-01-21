/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let len = Math.max(num1.length, num2.length), add = 0, ans = [];
    num1 = num1.padStart(len, '0')
    num2 = num2.padStart(len, '0')
    for (let i = len - 1; i >= 0; i--) {
        let res = (num1.charAt(i) - 0) + (num2.charAt(i) - 0) + add
        ans.push(res % 10)
        add = Math.floor(res / 10)
    }
    //最后可能还有进位
    if (add) {
        ans.push(add)
    }
    return ans.reverse().join('')
};

console.log(addStrings('11', '123'))
console.log(addStrings('11', '0'))
console.log(addStrings('1', '9'))
