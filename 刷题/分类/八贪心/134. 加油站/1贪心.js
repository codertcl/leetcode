var canCompleteCircuit = function (gas, cost) {
    let n = gas.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += gas[i] - cost[i];
    }
    if (sum < 0) {
        // 总油量小于总的消耗，无解
        return -1;
    }
    // 记录油箱中的油量
    let tank = 0;
    // 记录起点
    let start = 0;
    /**
     * 如果发现从i出发无法走到j，那么i以及i, j之间的所有站点都不可能作为起点。
     */
    for (let i = 0; i < n; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            // 无法从 start 走到 i
            // 所以站点 i + 1 应该是起点
            tank = 0;
            start = i + 1;
        }
    }
    return start === n ? 0 : start;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))//3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]))//-1
