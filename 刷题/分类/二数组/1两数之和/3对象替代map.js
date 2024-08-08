var twoSum = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let val = target - nums[i]
        if (obj[val] !== undefined) {
            return [i, obj[val]]
        }
        // let index = obj[target - nums[i]]
            // if (index !== undefined) {
            //     return [i, index]
        // }
        else {
            obj[nums[i]] = i
        }
    }
};
