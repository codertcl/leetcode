const arr = [29, 12, 40, 80, 15, 40, 38, 56];

function fn(arr, k) {
    if (k === 0) return []
    // 1、选择排序，每个外层循环结束后，将最小的元素移动到数组开头
    for (let i = 0; i < arr.length; i++) {
        // 此处不能使用flag来标识数组是否有序，内层无交换，只能说明arr[i]是本次比较中的最小元素了
        // let f = true
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[i] > arr[j + 1]) {
                // f = false
                [arr[i], arr[j + 1]] = [arr[j + 1], arr[i]]
            }
        }
        if (i === k - 1) return arr.slice(0, k)
    }
}

console.log(fn(arr, 2))
