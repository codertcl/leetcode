var findKthLargest = function (nums, k) {
    const quickSort = (arr) => {
        if (arr.length < 2) return arr
        let left = [], right = [], pivot = arr[0]
        for (let i = 1; i < arr.length; i++) {
            if (pivot < arr[i]) left.push(arr[i])
            else right.push(arr[i])
        }
        return [...quickSort(left), pivot, ...quickSort(right)]
    }
    return quickSort(nums)[k - 1]
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))//5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))//4
