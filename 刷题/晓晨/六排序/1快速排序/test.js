function quickSort(arr, left, right) {
    if (arr.length > 1) {
        let index = partition(arr, left, right)
        if (left < index - 1) {
            quickSort(arr, left, index - 1)
        }
        if (index < right) {
            quickSort(arr, index, right)
        }
    }
    return arr
}

function partition(arr, left, right) {
    let i = left, j = right, pivot = arr[Math.floor(left + (right - left) / 2)]
    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }
        while (arr[j] > pivot) {
            j--
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--
        }
    }
    return i
}

let arr = [1, 2, 1, 1, 4, 9, 0]
console.log(quickSort(arr, 0, arr.length - 1))
