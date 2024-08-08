// var twoSum = function (nums, target) {
//     if(nums.length===2){
//         return [0,1];
//     }
//     for (let i = 0; i < nums.length-1; i++) {
//         for (let j = i+1; j <nums.length ; j++) {
//             if(nums[i]+nums[j]===target){
//                 return [i,j]
//             }
//         }
//     }
// };


var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let index = nums.indexOf(target - nums[i])
        if (index !== -1 && index !== i) {
            return [index, i]
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))

