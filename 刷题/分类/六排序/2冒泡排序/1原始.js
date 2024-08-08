function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag = true
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if (flag) return arr////某一轮排序中已经没有元素进行交换 则数组已经有序 则结束函数
    }
    return arr
}

console.log(BubbleSort([10,2, 3, 1, -3]))
