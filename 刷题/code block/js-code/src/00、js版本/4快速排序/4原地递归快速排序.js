function quickSort(arr, left, right) {
    // 如果左边界比右边界大，返回结果，排序结束
    //该判断必须放在更新left和right值前 否则当right为0时，right又会更新为数组长度减一 导致死循环
    if (left > right)
        return
    // 默认值处理，如果有传入left和right参数，就赋值这个参数，否则就赋值后面的默认值
    left = left || 0;
    right = right || arr.length - 1;
    // 定义移动的左游标和右游标 获取基准值 便于最后将其移动到合适位置
    let i = left, j = right, temp = arr[left];
    // 判断左右游标是否重合，如果重合，循环结束
    while (i < j) {
        // 基准数在左边，因此从右边开始一个个扫描
        // 从右到左，寻找小于基准数的数，且左游标要小于右游标
        // 如果数字大于基准数（证明不符合条件）必须取等号，寻找下一个
        // 直到找到比基准数小的数，游标停止递减
        while (arr[j] >= temp && i < j) {
            j--;
        }
        // 从左到右，寻找大于基准数的数，且左游标要小于右游标
        // 如果数字小于基准数（证明不符合条件），寻找下一个
        // 直到找到比基准数小的数，游标停止递增
        while (arr[i] <= temp && i < j) {
            i++;
        }
        // 如果左游标小于右游标，则交换两个数字的位置
        if (i < j) {
            let a = arr[i];
            arr[i] = arr[j];
            arr[j] = a
        }
    }
    //此时i=j  重合之后，找到了基准数的位置，左边的比他小，右边的比他大
    arr[left] = arr[i];
    arr[i] = temp
    // 递归操作左右两个数组  注意i位置是 之前基准元素所在位置
    quickSort(arr, left, i - 1)
    quickSort(arr, i + 1, right)
    return arr;
}

console.log(quickSort([1, 0, 2, 1, 2, 4, 7, 1, 2, 9]));
console.log(quickSort([-1, 0, 2]));
// console.log(quickSort([1, 0, 2, 4, 7, 9]));
// console.log(quickSort([1, 0, 2, 1, 2, 4, 7, 1, 2, 9]));
// console.log(quickSort([2, 4, 3, 4, 6, 3, 2, 5, 6, 2, 3, 6, 5, 4]));