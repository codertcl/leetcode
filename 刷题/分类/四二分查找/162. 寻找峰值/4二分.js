const findPeakElement = nums => {
    let [left, right] = [0, nums.length - 1];
    //由于两个相邻元素不等,所以一定存在峰值
    while (left < right) {
        const mid = left + ((right - left) >> 1);//不断二分 寻找上升元素对
        if (nums[mid] > nums[mid + 1]) {
            right = mid;//下降
        } else {
            //mid小于mid+1对应值,所以mid右侧一定存在峰值
            //当mid+1为最后一个元素时，mid+1为峰值
            //mid+1不是最后一个元素,则mid+1右侧存在峰值，则则向右查找,left=mid+1
            //在mid右侧区间查找继续while循环，直到left=right,区间长度为1,该区间内存在峰值,则为left和right对应值
            left = mid + 1;//上升
        }
    }
    return left;
};
debugger
console.log(findPeakElement([1, 2, 3, 1]))//2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]))//1/5
console.log(findPeakElement([1, 2]))//1
