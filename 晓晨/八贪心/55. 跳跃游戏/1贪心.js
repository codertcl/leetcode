// var canJump = function (nums) {
//     ////能覆盖的最远距离
//     let max = 0
//     for (let i = 0; i < nums.length; i++) {
//        //判断能够到i
//         if (max >= i) {
//             // //覆盖距离超过或等于nums.length - 1 说明能到达终点
//             if (i >= nums.length - 1) {
//                 return true
//             }
//             // //当前覆盖距离cover和当前位置加能跳跃的距离中取一个较大者
//             max = Math.max(max, i + nums[i])
//         }
//     }
//     return false
// };


var canJump = function (nums) {
    if (nums.length === 1) return true; //长度为1 直接就是终点
    let cover = nums[0]; //能覆盖的最远距离
    //遍历当前能够覆盖到的每一个位置，计算其能够覆盖的最远位置
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(cover, i + nums[i]); //当前覆盖距离cover和当前位置加能跳跃的距离中取一个较大者
        if (cover >= nums.length - 1) {
            //覆盖距离超过或等于nums.length - 1 说明能到达终点
            return true;
        }
    }
    return false; //循环完成之后 还没返回true 就是不能达到终点
};

console.log(canJump([1]))//true
console.log(canJump([0,1]))//false
console.log(canJump([2, 3, 1, 1, 4]))//true
console.log(canJump([3, 2, 1, 0, 4]))//false
console.log(canJump([1, 5, 1, 0, 4]))//true
