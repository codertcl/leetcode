var maxVowels = function (s, k) {
    let max = 0, str = 'aeiou'
    for (let i = 0; i < s.length; i++) {
        let count = 0
        for (let j = i; j < i + k && j < s.length; j++) {
            if (str.includes(s.charAt(j))) count++
        }
        if (max < count) max = count
    }
    return max
};

console.log(maxVowels('abciiidef', 3))//3
console.log(maxVowels('aeiou', 2))//2
console.log(maxVowels('leetcode', 3))//2
console.log(maxVowels('rhythms', 4))//0
console.log(maxVowels('tryhard', 4))//1

