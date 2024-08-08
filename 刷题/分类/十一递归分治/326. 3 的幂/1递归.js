/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  const fun = (x) => {
    if (x === 1) {
      return true
    } else if (x !== Math.floor(x)) {
      return false
    } else
      return isPowerOfThree(x / 3);
  }
  if (n <= 0) return false
  return fun(Math.abs(n))
};
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(1))
console.log(isPowerOfThree(-1))
console.log(isPowerOfThree(-3))
console.log(isPowerOfThree(-2))
console.log(isPowerOfThree(2))
console.log(isPowerOfThree(-27))