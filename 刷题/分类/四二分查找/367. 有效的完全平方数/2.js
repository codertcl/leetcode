/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let x = 1, square = 1;
  while (x < num) {
    if (square === num) {
      return true
    }
    x++;
    square = x * x
  }
  return false
};
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(2))
console.log(isPerfectSquare(3))
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(5))
console.log(isPerfectSquare(9))