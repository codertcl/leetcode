function quickSort(arr) {
    if (arr.length < 2) return arr
    let left = [], right = [], pivot = arr.splice(0, 1)[0]
    for (let i = 0; i < arr.length; i++) {
        if (pivot < arr[i]) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([1, 0, 2, 1, 2, 4, 7, 1, 2, 9]));
