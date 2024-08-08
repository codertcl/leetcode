var canCompleteCircuit = function (gas, cost) {
    let sum = 0, n = gas.length, start = null, minSum = 0
    for (let i = 0; i < n; i++) {
        sum += gas[i] - cost[i]
        // 经过第 i 个站点后，使 sum 到达新低
        // 所以站点 i + 1 就是最低点（起点）
        if (sum < minSum) {
            minSum = sum
            start = i + 1
        }
    }
    // // 总油量小于总的消耗，无解
    if (sum < 0) {
        return -1
    }
    return start === n ? 0 : start
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))//3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))//-1
