// 递归快排
const quickSort = (arr) => {
    if (arr.length < 2) return arr;
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex], left = [], right = [], equals = [];
    for (let i = 0; i < arr.length; i++) {
        // 不删除基准值则必须单独处理等于基准值的元素，
        // 否则像解法2那样写，会在数组存在重复元素时导致left或right数组长度恒定大于1，数组中为和基准值相同的元素
        // 不会结束递归，出现死循环
        arr[i] < pivot ? left.push(arr[i]) : (arr[i] === pivot ? equals.push(pivot) : right.push(arr[i]));
    }
    return [...quickSort(left), ...equals, ...quickSort(right)]
}
console.log(quickSort([1, 0, 2, 1, 2, 4, 7, 1, 2, 9]));
console.log(quickSort([2, 4, 3, 4, 6, 3, 2, 5, 6, 2, 3, 6, 5, 4]));