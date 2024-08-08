/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const [self, times, str] = s.match(/(\d*)\[([^\[\]]*)\]/) || []
    console.log(s, self, times, str)
    return self ? decodeString(s.replace(self, Array(times * 1).fill(str).join(''))) : s
};

console.log(decodeString("3[a]2[bc]")) // aaabcbc