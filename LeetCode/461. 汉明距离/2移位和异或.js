/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let s = x^y, ret = 0;
  while (s!== 0) {
    ret += s & 1; // S从右往左的每一位与1&,若该位为1则结果为1,ret结果 + 1，反之ret 不变
    s >>= 1; // s右移一位
  }
  return ret
};
console.log(hammingDistance(1, 4)) //2