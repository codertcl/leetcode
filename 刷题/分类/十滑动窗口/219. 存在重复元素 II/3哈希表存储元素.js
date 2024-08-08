var containsNearbyDuplicate = function (nums, k) {
    if (nums.length < 2) return false
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k)
            return true
        map.set(nums[i], i)
    }
    return false
};
console.log(containsNearbyDuplicate([-1, -1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))//true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))//false
console.log(containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1))//true
