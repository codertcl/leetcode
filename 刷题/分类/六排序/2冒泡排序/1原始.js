function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let flag = true;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = false;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        if (flag) return arr;
    }
    return arr
}

console.log(BubbleSort([10, 2, 3, 1, -3]))
console.log(BubbleSort([10, 12, 3, -1, -3]))
