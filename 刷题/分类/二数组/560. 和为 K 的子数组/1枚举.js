/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//     let count = 0
//     for (let start = 0; start < nums.length; start++) {
//         let sum = 0
//         for (let end = start; end >= 0; end--) {
//             sum += nums[end]
//             if (sum === k) {
//                 count++
//             }
//         }
//     }
//     return count
// };


var subarraySum = function (nums, k) {
    let count = 0
    for (let start = 0; start < nums.length; start++) {
        let sum = 0
        for (let end = start; end < nums.length; end++) {
            sum += nums[end]
            if (sum === k) {
                count++
            }
        }
    }
    return count
};

console.log(subarraySum([1, 1, 1], 2))//2
console.log(subarraySum([1, 2, 3], 3))//2
