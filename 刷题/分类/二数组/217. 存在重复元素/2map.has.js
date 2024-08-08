var containsDuplicate = function (nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        //has判断的是键是否存在
        if (map.has(nums[i])) return true
        map.set(nums[i], i)
    }
    return false
};

console.log(containsDuplicate([1, 2, 3, 1]))//true
console.log(containsDuplicate([1, 2, 3, 4]))//false
console.log(containsDuplicate([1, 2, 1, 4]))//true
console.log(containsDuplicate([1, 1]))//true
