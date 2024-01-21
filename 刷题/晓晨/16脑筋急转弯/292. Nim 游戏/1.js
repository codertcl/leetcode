/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  // 为4的倍数则先手必输的找规律
  return n % 4 !== 0
  // return n&3
};