const arr = [29, 12, 40, 80, 15, 40, 38, 56];

function fn(arr, k) {
    // 1、选择排序，每个外层循环结束后，将最小的元素移动到数组开头
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i; j < arr.length - 1; j++) {
    //         if (arr[i] > arr[j + 1]) {
    //             [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]]
    //         }
    //         console.log(arr)
    //     }
    // }

    // // 2、冒泡排序注意是相邻的两个元素比较，所以是index和index+1对应的元素比较，通过内层循环来实现
    //  外层每次循环结束，把待排序的数组中最大元素移动到数组最后
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length - 1 - i; j++) {
    //         if (arr[j] > arr[j + 1]) {
    //             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    //         }
    //     }
    // }
    // console.log(arr)
    // return arr.slice(0, k)

    //
    for (let i = 0; i < arr.length; i++) {
        // 标志位判断是否已经有序了
        let flag = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        // console.log(arr)
        if (flag || i === k - 1) {
            return arr.slice(-k)
        }
    }
}

console.log(fn(arr, 2))
