/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n <= 0) {
    return false;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(1))
console.log(isPowerOfThree(1))
console.log(isPowerOfThree(-3))
console.log(isPowerOfThree(-2))
console.log(isPowerOfThree(2))
console.log(isPowerOfThree(-27))