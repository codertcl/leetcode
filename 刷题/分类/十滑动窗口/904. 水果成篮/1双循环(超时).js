/**
 * @param {number[]} fruits
 * @return {number}
 */
//寻找只包含两种数字的最长子序列
var totalFruit = function (fruits) {
    if (fruits.length < 3) return fruits.length
    let max = 0
    for (let i = 0; i < fruits.length; i++) {
        //fruits存储水果种类 count为水果数量
        let j = i + 1, set = new Set(), count = 0
        set.add(fruits[i])//该种类添加到set中(重复的则不用添加)
        count++//水果数量+1
        while (j < fruits.length) {
            //该水果不存在
            if (!set.has(fruits[j])) {
                //种类已经为2 则结束该层循环
                if (set.size === 2) {
                    break
                }
                //继续添加到set中
                set.add(fruits[j])
            }
            //水果数量+1
            count++
            //判断下一棵树
            j++
        }
        max = Math.max(max, count)
    }
    return max
};
console.log(totalFruit([1, 2, 1]))//3
console.log(totalFruit([0, 1, 2, 2]))//3
console.log(totalFruit([1, 2, 3, 2, 2]))//4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]))//5
