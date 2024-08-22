function quickSortNonRecursive(arr) {
    function partition(left, right) {
        let pivot = arr[Math.floor(left + (right - left) / 2)], //middle element
            i = left, // 左指针
            j = right; // 右指针

        while (i <= j) {
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--;
            }
            //i>j不用交换 即i对应元素大于pivot j对应元素小于pivot 大的在右边 小的在左边，不用交换
            if (i <= j) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // 交换元素
                i++;
                j--;
            }
        }
        return i;
    }

    let stack = [0, arr.length - 1];

    while (stack.length) {
        let right = stack.pop();
        let left = stack.pop();

        let pivotIndex = partition(left, right);

        if (left < pivotIndex - 1) {
            stack.push(left, pivotIndex - 1);
        }

        if (pivotIndex < right) {
            stack.push(pivotIndex, right);
        }
    }

    return arr;
}

console.log(quickSortNonRecursive([3, 6, 8, 10, 1, 2, 1]));
console.log(quickSortNonRecursive([13, 12, 11, 10, 9, 2, 1]));
console.log(quickSortNonRecursive([12, 12, 11, 10, 9, 2, 1]));