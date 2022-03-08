/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1 = version1.split('.').map(item => Number(item)),
        v2 = version2.split('.').map(item => Number(item));
    let len = Math.max(v1.length, v2.length)
    for (let i = v1.length; i < len; i++) {
        v1.push(0)
    }
    for (let i = v2.length; i < len; i++) {
        v2.push(0)
    }
    for (let i = 0; i < len; i++) {
        if (v1[i] > v2[i]) {
            return 1
        } else if (v1[i] < v2[i]) {
            return -1
        }
    }
    return 0
};

console.log(compareVersion('1.0', '1.0.0'))
console.log(compareVersion('1.1', '1.0.0'))
console.log(compareVersion('0.1', '1.0.0'))
console.log(compareVersion('1.01', '1.001'))
