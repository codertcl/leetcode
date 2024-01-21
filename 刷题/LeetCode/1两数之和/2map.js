var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // let index = map.get(target - nums[i])
        // if (index !== undefined) {
        //     return [i, index]
        if (map.has(target - nums[i])) {//has判断键是否存在
            return [i, map.get(target - nums[i])]
        } else {
            map.set(nums[i], i)
        }
    }
};
