var containsNearbyDuplicate = function (nums, k) {
    if (nums.length < 2) return false
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k && j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
};
console.log(containsNearbyDuplicate([-1, -1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))//true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))//false
console.log(containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1))//true
