/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let odd = [], even = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2===0) odd.push(nums[i])
        else even.push(nums[i])
    }
    return [...odd, ...even]
};

// var sortArrayByParity = function(A) {
//     let arr1 = []
//     let arr2 = []
//     arr1 = A.filter( item => item % 2 == 0)
//     arr2 = A.filter(item => item % 2 != 0)
//     return arr1.concat(arr2)
// };
console.log(sortArrayByParity([0]))
console.log(sortArrayByParity([1,2,3,5,4]))
