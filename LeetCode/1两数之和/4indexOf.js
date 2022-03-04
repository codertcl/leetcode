var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i];
        //为了避免[3,2,4] target为6，indexOf导致结果为[0,0] 或者[1,1] tar为2
        //最好使用lastIndexOf
        // let index = nums.indexOf(target - nums[i])
        let index = nums.lastIndexOf(target - nums[i])
        //由于结果一定存在所以不用判断index是否为-1
        // 必须index大于i才是正确结果
        // 如果没有该限制就出现,[3,2,4] target为6，indexOf导致结果为[0,0]
        //如果是index!==i 则可能出现index为-1
        if (index > i) {
            return [index, i]
        }
    }
};

console.log(twoSum([3, 3], 6))
