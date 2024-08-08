/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    var curDistance = 0
    var nextDistance = 0 // 在当前范围内找下一次可到达的最大范围
    var step = 0
    // 前提：题目保证可以到达 nums[n-1]
    // 最后一个索引不需要遍历，因为是到达的点，不是经过的点，到了终点步数不需要加1
    for (var i = 0; i < nums.length - 1; i++) {
        // 在每一步，更新 nextDistance 为 Math.max(nextDistance, nums[i] + i)，这意味着在到达位置 i 时，我们可以考虑从这个位置出发能够到达的最远距离。
        nextDistance = Math.max(nextDistance, nums[i] + i)
        // 遍历到倒数第二个值即可，倒二需要走则+1，不需要走则说明直接到终点
        // 即当前能够到达的最远距离的边界
        if (curDistance === i) { // 说明移动到范围的边界了，需要向前一步，进入下一个范围，步数加1，范围更新为下一个范围
            step++
            curDistance = nextDistance
        }
    }
    return step
};
console.log(jump([2,3,1,1,4])) // 2
console.log(jump([2,3,0,1,4])) // 2