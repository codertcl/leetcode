/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const str = s.split('')
    const r = [str[0]]
    for (let i =1; i < str.length; i++) {
        const l = r.length
        if (str[i] !== r[l-1]) {
            r.push(str[i])
        } else {
            r.pop()
        }
    }
    return r.join('')
};
console.log(removeDuplicates('abbaca'))