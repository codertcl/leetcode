var singleNumber = function(nums) {
    for(let i =0; i<nums.length; i++){
        if (i === nums.indexOf(nums[i]) && i === nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }
};
console.log(singleNumber([2, 2, 0]))
console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(0 ^ 2)
console.log(0 ^ 4)
console.log(0 ^ 1)
