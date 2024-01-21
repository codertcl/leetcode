/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true
  // let l = 1, h = Math.floor(num / 2) //需要对1做专门判断
  let l = 1, h = num
  while (l <= h) {
    let m = Math.floor(l + (h - l) / 2)
    if (m * m === num) {
      return true
    } else if (m * m < num) {
      l = m + 1
    } else {
      h = m - 1
    }
  }
  return false
};
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(2))
console.log(isPerfectSquare(3))
console.log(isPerfectSquare(4))
console.log(isPerfectSquare(5))
console.log(isPerfectSquare(9))