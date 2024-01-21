var searchInsert = function (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else
            right = mid - 1
    }
    return left
};

// var searchInsert = function(nums, target) {
//     const n = nums.length;
//     let left = 0, right = n - 1, ans = n;
//     while (left <= right) {
//         let mid = ((right - left) >> 1) + left;
//         if (target <= nums[mid]) {
//             ans = mid;
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return ans;
// };
debugger
console.log(searchInsert([1, 3, 5, 6], 5))//2
console.log(searchInsert([1, 3, 5, 6], 2))//1
console.log(searchInsert([1, 3, 5, 6], 7))//4
