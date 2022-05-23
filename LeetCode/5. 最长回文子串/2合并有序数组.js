var longestPalindrome = function (s) {
    function parame(s, l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return s.substring(l + 1, r)
    }

    let res = ''
    for (let i = 0; i < s.length; i++) {
        let s1 = parame(s, i, i)
        let s2 = parame(s, i, i + 1)
        res = res.length > s1.length ? res : s1
        res = res.length > s2.length ? res : s2
    }

    return res;
};
console.log(longestPalindrome('babad')) //bab
console.log(longestPalindrome('cbbd')) //bb
console.log(longestPalindrome('cbbd')) //bb
console.log(longestPalindrome('c')) //c
console.log(longestPalindrome('ac')) //a
