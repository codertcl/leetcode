/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const map = new Map();
    for (const i of s) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        } else {
            map.set(i, 1)
        }
    }
    for (const i of t) {
        if (map.has(i)) {
            map.set(i, map.get(i) - 1)
        } else {
            return false
        }
    }
    return !Array.from(map.values()).find((item) => item)
};