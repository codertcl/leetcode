function swap(items, left, right) {
    var temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}

//找到枢轴元素后 返回对应的下标 左边的元素都比它小 右边都比它大
function partition(items, left, right) {
    var pivot = items[Math.floor(left + (right - left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        //i>j不用交换 即i对应元素大于pivot j对应元素小于pivot 大的在右边 小的在左边，不用交换
        if (i <= j) {
            swap(items, i, j); //swapping two elements
            i++;
            j--;
        }
    }
    //i===j
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        // //找到枢轴元素下标后 返回对应的下标 左边的元素都比它小 右边都比它大
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);//不包含枢轴元素
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);//包含枢轴元素进行排序
        }
    }
    return items;
}

var findKthLargest = function (nums, k) {
    return quickSort(nums, 0, nums.length - 1)[nums.length - k]
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))//5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))//4
