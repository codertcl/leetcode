/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const r = new RegExp(p, 'g');
    const temp = s.match(r);//获取所有匹配结果 返回值为数组
    if (!temp) return false;
    for (const str of temp) {
        if (str === s) return true;
    }
    return false;
};

// const isMatch = function (s, p) {
//     const reg = new RegExp(`^${p}$`);
//     return reg.test(s);
// };

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', '.*'))
console.log(isMatch('aa', 'a*'))


// const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
// const regex = '[A-Z]';
// console.log(paragraph.match(/[A-Z]/))
// console.log(paragraph.match(/[A-Z]/g));
// console.log(paragraph.match(regex))
