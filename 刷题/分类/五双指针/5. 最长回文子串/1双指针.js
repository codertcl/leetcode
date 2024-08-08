/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const palindrome = (s, l, r) => {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--
            r++
        }
        //返回值不包含l和r对应元素
        return s.substring(l+1, r)
    }
    let res = ""
    for (let i = 0; i < s.length; i++) {
        let s1 = palindrome(s, i, i)
        let s2 = palindrome(s, i, i + 1)
        res = res.length > s1.length ? res : s1
        res = res.length > s2.length ? res : s2
    }
    return res
};

console.log(longestPalindrome('babad'))//bab
console.log(longestPalindrome('cbbd'))//bb
