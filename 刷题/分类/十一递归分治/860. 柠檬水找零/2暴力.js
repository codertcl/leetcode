/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let a = 0, b = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      a++
    } else if (bills[i] === 10) {
      if (a) {
        a--
        b++
      } else return false
    } else {
      if (a && b) {
        a--
        b--
      } else if (a>=3) {
        a -=3
      } else return false
    }
  }
  return true
};

console.log(lemonadeChange([5,5,5,10,20])) // true
console.log(lemonadeChange( [5,5,10,10])) //true
console.log(lemonadeChange( [5,5,10,10,20])) //false
console.log(lemonadeChange( [10])) //false
console.log(lemonadeChange( [20])) //false