/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1, j = num2.length - 1, add = 0, ans = [];
    while (i >= 0 || j >= 0 || add) {
        const x = i >= 0 ? num1.charAt(i) - 0 : 0
        const y = j >= 0 ? num2.charAt(j) - 0 : 0
        let res = x + y + add
        ans.push(res % 10)
        add = Math.floor(res / 10)
        i--;
        j--;
        if ((i === -1 && add === 0) || (j === -1 && add === 0)) {
            break
        }
    }
    return ans.reverse().join('')
};

console.log(addStrings('11', '22'))
console.log(addStrings('11', '0'))


// console.log(typeof('1'-0))//1 number
// console.log(typeof ('1'-1))//// number
// console.log(typeof (1-'1'))////0 number
