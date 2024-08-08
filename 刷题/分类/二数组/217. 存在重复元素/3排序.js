var containsDuplicate = function (nums) {
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i + 1 < nums.length; i++) {
        if (nums[i] === nums[i + 1]) return true
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]))//true
console.log(containsDuplicate([1, 2, 3, 4]))//false
console.log(containsDuplicate([1, 2, 1, 4]))//true
console.log(containsDuplicate([1, 1]))//true
