var findAnagrams = function (s, p) {
    let need = {}, window = {}, left = 0, right = 0, valid = 0, res = []
    for (const a of p) {
        need[a] = (need[a] || 0) + 1
    }
    while (right < s.length) {
        let b = s[right]
        right++
        if (need[b]) {
            window[b] = (window[b] || 0) + 1
            if (window[b] === need[b]) valid++
        }

        while (right - left >= p.length) {
            if (valid === Object.keys(need).length) res.push(left)
            let c = s[left]
            left++
            if (need[c]) {
                if (need[c] === window[c]) valid--
                window[c]--
            }
        }
    }
    return res
};
console.log(findAnagrams('cbaebabacd', 'abc'))// [0,6]
console.log(findAnagrams('abab', 'ab'))// [0,1,2]
