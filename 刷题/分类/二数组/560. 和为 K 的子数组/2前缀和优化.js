var subarraySum = function (nums, k) {
    let n = nums.length, count = 0;
    let preSum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        // preSum[i]就是nums[0..i-1]的和
        preSum[i + 1] = preSum[i] + nums[i];
    }
    // 穷举所有子数组
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 0; j < i; j++) {
    //         // 子数组nums[j...i-1]的元素和
    //         // if (preSum[i] - preSum[j] == k) {
    //         if (preSum[i] === k + preSum[j]) {
    //             count++;
    //         }
    //         // 如果我们想求nums[i..j]的和，只需要一步操作preSum[j+1]-preSum[i]即可，而不需要重新去遍历数组了。
    //     }
    // }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            // 子数组nums[j...i-1]的元素和
            // if (preSum[i] - preSum[j] == k) {
            if (preSum[j] === k + preSum[i]) {
                count++;
            }
            // 如果我们想求nums[i..j]的和，只需要一步操作preSum[j+1]-preSum[i]即可，而不需要重新去遍历数组了。
        }
    }
    return count;
};
console.log(subarraySum([1, 1, 1], 2))//2
console.log(subarraySum([1, 2, 3], 3))//2
console.log(subarraySum([1, 2, 3], 4))//0
console.log(subarraySum([1, 2, 3], 1))//1
console.log(subarraySum([1], 0))//0
console.log(subarraySum([1, -1], 0))//1
