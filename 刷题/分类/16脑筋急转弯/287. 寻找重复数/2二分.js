/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const n = nums.length;
    let l = 1, r = n - 1;
    let res = -1;
    while (l <= r) {
        let cnt = 0,  mid = (l + r) >> 1;
        for (let i = 0; i < n; i++) {
            if (nums[i] <= mid) cnt++;
        }
        if (cnt <= mid) l = mid + 1;
        else {
            r = mid - 1;
            res = mid;
        }
    }
    return res;
};

console.log(findDuplicate([1, 3, 4, 2, 2])) //2
console.log(findDuplicate([3, 3, 3, 3, 3])) //3