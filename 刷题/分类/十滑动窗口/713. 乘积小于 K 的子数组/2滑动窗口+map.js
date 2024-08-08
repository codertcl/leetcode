var numSubarrayProductLessThanK = function (nums, k) {
    let res = 0, i = 0, product = 1
    for (let j = 0; j < nums.length; j++) {
        product *= nums[j]
        while (i <= j && product >= k) {
            product /= nums[i]
            i++
        }
        res += j - i + 1
    }
    return res
};
//[0,0]=>1  [0,1]=>2 [1,2]=>2 [1,3]=>3
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))//8
console.log(numSubarrayProductLessThanK([1, 2, 3], 3))//3
