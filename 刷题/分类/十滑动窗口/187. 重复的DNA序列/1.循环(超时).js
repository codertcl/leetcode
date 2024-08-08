var findRepeatedDnaSequences = function (s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        let j = i + 10;
        if (j < s.length) {
            let str = s.slice(i, j)
            let index = s.lastIndexOf(str)
            if (index !== -1 && index !== i && !res.includes(str)) {
                res.push(str)
            }
        }
    }
    return res
};

//["AAAAACCCCC","CCCCCAAAAA"]
console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))
console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'))//['AAAAAAAAAAAAA']
