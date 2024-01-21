var singleNumber = function(nums) {
    let map=new Map(),res=[]
    for (let i = 0; i <nums.length ; i++) {
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    for (let i = 0; i <nums.length ; i++) {
        if(map.get(nums[i])===1) res.push(nums[i])
    }
    return res
};

console.log(singleNumber( [1,2,1,3,2,5]))//[3,5]
console.log(singleNumber( [ -1,0]))//[ [-1,0]
