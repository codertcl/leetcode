/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split('.'), v2 = version2.split('.');
    const len = Math.max(v1.length, v2.length)
    // 在每个版本号部分后补0
    v1.push(...Array(len - v1.length).fill('0'))
    v2.push(...Array(len - v2.length).fill('0'))
    for (let i = 0; i < len; i++) {
        if (+v1[i] > +v2[i]) {
            return 1
        } else if (+v1[i] < +v2[i]) {
            return -1
        }
    }
    return 0
};