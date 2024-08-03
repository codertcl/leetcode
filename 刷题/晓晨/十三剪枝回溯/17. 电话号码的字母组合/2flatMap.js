var letterCombinations = function (digits) {
    if (digits.length === 0) return [];
    const buttons = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    }
    let result = [""]
    for (let i = 0; i < digits.length; i++) {
        result = buttons[digits[i]].flatMap(x => result.map(y => y + x))
    }
    return result
};
console.log(letterCombinations("23")) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations("2")) // ["a","b","c"]
console.log(letterCombinations("")) // []
