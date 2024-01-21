function BubbleSort(arr) {
    let left = 0, right = arr.length - 1
    // 双向冒泡排序（相比于前两种，数据量越大排序越快）
    // 此版本与另外两个版本的思想不同之处在于，它是每轮确定两个最值，一个最大值，一个最小值
    while (left < right) { // 左侧大于等于右侧，意味着左侧大于等于一半的length，说明已经完成整个排序了
        let flag = false
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                flag = true
            }
        }
        for (let j = right; j > left; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
                flag = true
            }
        }
        right--
        left++
        if (!flag) { // 如果一轮里数据都没有变化，则说明排序完成，可终止排序
            break
        }
    }
    return arr
}

console.log(BubbleSort([10, 2, 3, 1, -3]))
