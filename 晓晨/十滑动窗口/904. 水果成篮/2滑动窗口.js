//寻找只包含两种数字的最长子序列
var totalFruit = function (fruits) {
    if (fruits.length < 3) return fruits.length
    let max = 0, l = 0, n = 0, arr = [fruits[0]]
    for (let r = 0; r < fruits.length; r++) {//窗口的右指针不断前进
        if (!arr.includes(fruits[r])) {//如果窗口中不包含 进窗口的水果
            if (arr.length <= 1) {//如果只有一种或没有水果
                arr[1] = fruits[r]//将这种水果加入arr数组
            } else {//如果有两种水果
                l = n//更新窗口的左边界
                arr[0] = fruits[r - 1]//更新arr中水果的种类
                arr[1] = fruits[r]
            }
        }
        ////如果进来了一种新的类型的水果 更新前一种水果的位置
        if (fruits[r] !== fruits[n]) {
            n = r
        }
        max = Math.max(max, r - l + 1)//更新滑动窗口的最大值
    }
    return max
}
// console.log(totalFruit([1, 2, 1]))//3
debugger
console.log(totalFruit([0, 1, 2, 2]))//3
console.log(totalFruit([1, 2, 3, 2, 2]))//4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))//5
