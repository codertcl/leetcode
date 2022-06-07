var mySqrt = function (x) {
    let res = Math.floor(Math.exp(0.5 * Math.log(x)))
    return (res + 1) * (res + 1) <= x ? res + 1 : res
};

console.log(mySqrt(0))
console.log(mySqrt(1))
console.log(mySqrt(2))
console.log(mySqrt(3))
console.log(mySqrt(4))
console.log(mySqrt(5))
console.log(mySqrt(6))
console.log(mySqrt(7))
console.log(mySqrt(8))
console.log(mySqrt(9))
