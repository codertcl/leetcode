var sortArrayByParityII = function (nums) {
    let res = [], i = 0
    for (const num of nums) {
        if (num % 2 === 0) {
            res[i] = num
            i += 2
        }
    }
    i = 1
    for (const num of nums) {
        if (num % 2 === 1) {
            res[i] = num
            i += 2
        }
    }
    return res
};
console.log(sortArrayByParityII([1, 0]))
console.log(sortArrayByParityII([1, 2, 3, 5, 4, 6]))
