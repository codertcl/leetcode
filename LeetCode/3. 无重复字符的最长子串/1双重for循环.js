/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 1, arr = s.split('');
    for (let i = 0; i < arr.length - 1; i++) {
        let str = '' + arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (!str.includes(arr[j])) {
                str += arr[j];
                if (str.length > max) {
                    max = str.length
                }
            } else {//出现了重复字符情况则该轮循环不必继续 否则不会连续
                break;
            }
        }
    }
    return s === '' ? 0 : max;
};
