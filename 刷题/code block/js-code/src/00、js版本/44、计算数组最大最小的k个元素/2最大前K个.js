const arr = [29, 12, 40, 80, 15, 40, 38, 56];

function fn(arr, k) {
    // 1、冒泡排序注意是相邻的两个元素比较，所以是index和index+1对应的元素比较，通过内层循环来实现
    //  外层每次循环结束，把待排序的数组中最大元素移动到数组最后
    for (let i = 0; i < arr.length; i++) {
        // 标志位判断是否已经有序了
        let flag = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        // flag为true表示已经有序
        // i === k - 1表示已经找到了前K个最大的元素，在数组最后面
        if (flag || i === k - 1) {
            return arr.slice(-k)
        }
    }
}

console.log(fn(arr, 2))
