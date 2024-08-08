var mySqrt = function (x) {
    let left = 0, right = x
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (mid * mid <= x) {
            left = mid + 1
        } else
            right = mid - 1
    }
    //终止条件left=right+1
    return right
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
