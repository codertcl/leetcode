var numSubarrayProductLessThanK = function (nums, k) {
    const n = nums.length
    let count = 0
    for (let start = 0; start < n; ++start) {
        let cur = 1
        for (let end = start; end < n; ++end) {
            cur *= nums[end]
            if (cur < k) {
                ++count
            } else {
                break
            }
        }
    }
    return count
};
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))//8
console.log(numSubarrayProductLessThanK([1, 2, 3], 3))//3

// let set=new Set()
// set.add([5,2])
// set.add([1])
// console.log(set)
// set.add([5,2,6])
// console.log(set)
