// 递归快排
const quickSort = (arr) => {
    if (arr.length < 2) return arr;
    const pivotIndex = 0, left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < arr[pivotIndex] ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), arr[pivotIndex], ...quickSort(right)]
}
console.log(quickSort([1, 0, 2, 1, 2, 4, 7, 1, 2, 9]));