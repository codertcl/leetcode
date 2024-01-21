var countBits = function (n) {
    let res = [0]
    for (let i = 1; i <= n; i++) {
        let count = 0, j = i
        while (j) {
            count++
            j &= j - 1
        }
        res.push(count)
    }
    return res
};
debugger
console.log(countBits(2))//[0,1,1]
console.log(countBits(5))//[0,1,1,2,1,2]
