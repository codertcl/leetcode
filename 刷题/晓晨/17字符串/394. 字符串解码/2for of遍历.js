/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let num = 0, result = "", numStack = [], strStack = [];
    for (const char of s) {
        if (!isNaN(char)) {
            num = num * 10 + +char; // 处理多个数字在一起的情况
        } else if (char === "[") {
            strStack.push(result);
            result = ""; // 开始构造字符串
            numStack.push(num);
            num = 0; //外层的数字处理完了
        } else if (char === "]") {
            let times = numStack.pop();
            result =  strStack.pop() + result.repeat(times);
        } else { // 字母
            result += char;
        }
    }
    return result
};

console.log(decodeString("3[a]2[bc]")) // aaabcbc