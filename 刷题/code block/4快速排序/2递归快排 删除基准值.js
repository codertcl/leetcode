// 递归快排
const quickSort = (arr) => {
    if (arr.length < 2) return arr;
    const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0], left = [], right = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}
console.log(quickSort([1, 0, 2, 4, 7, 9]));
console.log(quickSort([1, 0, 2, 1, 2, 4, 7, 1, 2, 9]));
console.log(quickSort([2, 4, 3, 4, 6, 3, 2, 5, 6, 2, 3, 6, 5, 4]));