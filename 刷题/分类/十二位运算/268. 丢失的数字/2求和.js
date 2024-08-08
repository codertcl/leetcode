var missingNumber = function(nums) {
    let sum=0,n=nums.length
    for (const num of nums) {
        sum+=num
    }
    return n*(n+1)/2-sum
};

console.log(missingNumber([3,0,1]))//2
console.log(missingNumber( [0,1]))//2
console.log(missingNumber(  [9,6,4,2,3,5,7,0,1]))//8
console.log(missingNumber(  [0]))//1
