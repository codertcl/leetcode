var missingNumber = function(nums) {
    let res=0
    for (let i = 0; i <=nums.length; i++) {
        res^=i
    }
    for (let i = 0; i <nums.length ; i++) {
        res^=nums[i]
    }
    return res
};

console.log(missingNumber([3,0,1]))//2
console.log(missingNumber( [0,1]))//2
console.log(missingNumber(  [9,6,4,2,3,5,7,0,1]))//8
console.log(missingNumber(  [0]))//1
