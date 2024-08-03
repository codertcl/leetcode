/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits.length) return [];
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const res = [];
    let s = [];

    const backTracking = (index) => {
        if (index === digits.length) {
            res.push(s.join(""));
        } else {
            for (const v of map[+digits[index]]) {
                s.push(v);
                backTracking(index + 1)
                s.pop();
            }
        }
    }
    backTracking(0);
    return res;
}
console.log(letterCombinations("23")) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("2")) // ["a","b","c"]
console.log(letterCombinations("")) // []
