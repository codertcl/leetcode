var carPooling = function (trips, capacity) {
    //最多一千个车站
    let seat = Array(1000).fill(0)
    //计算差分数组 相邻两站之间乘客数量之差
    for (let trip of trips) {
        seat[trip[1]] += trip[0]
        seat[trip[2]] -= trip[0]
    }
     //第0站单独判断
     if(seat[0]>capacity) return false
     for (let i = 1; i < seat.length; i++) {
        // seat[i]为第i站的人数
        seat[i] += seat[i - 1]
        if (seat[i] > capacity) return false
    }
    return true
};
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4))//false
console.log(carPooling([[2, 1, 5], [3, 3, 7]], 5))//true
console.log(carPooling([[3, 2, 7], [3, 7, 9], [8, 3, 9]], 11))//true
console.log(carPooling([[9, 0, 1], [3, 3, 7]], 4))//false
