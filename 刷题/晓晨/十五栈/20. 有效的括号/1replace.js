/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//     if (s.length % 2) return false
//     while (s.length) {
//         let l = s.length
//         s = s.replace('()', '')
//         s = s.replace('[]', '')
//         s = s.replace('{}', '')
//         if (s.length === l) {
//             return l === 0
//         }
//     }
//     return true
// };

var isValid = function (s) {
    if (s.length % 2) return false
    while (true) {
        let l = s.length
        //如果能够正确闭合则s一定有一对字符是相同类型的左右符号
        s = s.replace('()', '')
        s = s.replace('[]', '')
        s = s.replace('{}', '')
        //某一轮替换后 s长度未改变 则判断l长度是否为0
        if (s.length === l) {
            return l === 0
        }
    }
};