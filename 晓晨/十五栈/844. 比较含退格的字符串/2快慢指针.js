/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // 构建简洁有效的字符串
  let buildAbbr = (s) => {
    let slow = 0,
        fast = 0;
    // 之所以用split因为字符串是不可变的
    let arr = s.split("");
    while (fast < arr.length) {
      // 遇到不是#字符的slow往前移一位，slow左边都是有效字符
      if (arr[fast] != "#") arr[slow++] = arr[fast];
      // 遇到是#，因为题目说明了#是有退格的效果，所以slow--
      else if (slow != 0) slow--;
      fast++;
    }
    // 有效范围为0 到slow，不包含slow(左闭右开区间)
    arr.length = slow;
    return arr.join("");
  };
  return buildAbbr(s) == buildAbbr(t);
}

console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("a#c", "c#d#"));
console.log(backspaceCompare("a#c#", "c#d#"));
console.log(backspaceCompare("a#c", "c#d"));
console.log(backspaceCompare("ab##", "c#d#"));