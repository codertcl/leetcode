var search = function (nums, target) {
    return search_interval(nums, target, 0, nums.length - 1)
};

function search_interval(nums, target, left, right) {
    if (left > right) return -1
    //折中取mid
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] === target) {
        return mid
    } else if (nums[mid] < target) {
        return search_interval(nums, target, mid + 1, right)
    } else {
        return search_interval(nums, target, left, mid - 1)
    }
}

console.log(search([-1, 0, 3, 5, 9, 12], 9))//4
console.log(search([1, 2, 3], 1))//0
console.log(search([1, 2, 3], 2))//1
console.log(search([1, 2, 3], 3))//2
console.log(search([1, 2, 3], 0))//-1
