var containsNearbyDuplicate = function (nums, k) {
    if (nums.length < 2) return false
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i]))
            return true
        set.add(nums[i])
        //当前大小超过了k,则set第一个元素已经无效，不必存储,从而保证set的大小总不超过k
        // 所以在上面的判断中，只要set中存在该元素,就满足条件
        //Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
        if (set.size > k) set.delete(nums[i - k])
    }
    return false
};
console.log(containsNearbyDuplicate([-1, -1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))//true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))//true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))//false
console.log(containsNearbyDuplicate([0, 1, 2, 3, 4, 0, 0, 7, 8, 9, 10, 11, 12, 0], 1))//true
