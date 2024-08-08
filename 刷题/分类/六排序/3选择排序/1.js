function selectSort(arr) {
    let minIndex
    // 每一轮外循环 将最小值移动到最前面
    for (let i = 0; i < arr.length - 1; i++) {
        //记录最小值下标
        minIndex = i
        //寻找最小值下标
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}


console.log(selectSort([10, 2, 3, 1, -3]))
