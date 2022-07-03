var findRepeatedDnaSequences = function (s) {
    let ans = [], map = new Map()
    for (let i = 0; i <= s.length - 10; i++) {
        let sub = s.slice(i, i + 10)
        map.set(sub, (map.get(sub) || 0) + 1)
        // 如果条件为>1.则重复序列会被添加
        // 限制为刚好等于2,就只添加第二次出现的序列,第三次及更多次出现的不被添加
        if (map.get(sub) === 2) ans.push(sub)
    }
    return ans
};

//["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'))//['AAAAAAAAAAAAA']
