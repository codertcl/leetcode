/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var reverseString = function (s) {
    let i = 0, j = s.length - 1
    while (i < j) {
        // let tmp = s[i]
        // s[i] = s[j]
        // s[j] = tmp
        [s[i], s[j]] = [s[j], s[i]]
        i++
        j--
    }
    return s
};

console.log(reverseString(["h", "e", "l", "l", "o"]))
console.log(reverseString(["H", "a", "n", "n", "a", "h"]))
