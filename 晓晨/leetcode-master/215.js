//方法2
var findKthLargest = function (nums, k) {
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize); //构建大顶堆 大小为heapSize
  //大顶堆 前k-1个堆顶元素不断和数组的末尾元素交换 然后重新heapify堆顶元素
  //这个操作就是之前小顶堆出堆顶的操作，只不过现在是原地排序
  for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
    swap(nums, 0, i); //交换堆顶和数组末尾元素
    --heapSize; //堆大小减1
    maxHeapify(nums, 0, heapSize); //重新heapify
  }
  return nums[0]; //返回堆顶元素，就是第k大的元素

  function buildMaxHeap(nums, heapSize) {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
      //从第一个非叶子节点开始构建
      maxHeapify(nums, i, heapSize);
    }
  }
  // 从左向右，自上而下的调整节点
  function maxHeapify(nums, i, heapSize) {
    let l = i * 2 + 1; //左节点
    let r = i * 2 + 2; //右节点
    let largest = i;
    if (l < heapSize && nums[l] > nums[largest]) {
      largest = l;
    }
    if (r < heapSize && nums[r] > nums[largest]) {
      largest = r;
    }
    if (largest !== i) {
      swap(nums, i, largest); //找到左右节点中大的元素交换
      //递归交换后面的节点
      maxHeapify(nums, largest, heapSize);
    }
  }

  function swap(a, i, j) {
    //交换函数
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
};

//方法3
const findKthLargest = (nums, k) => {
  const n = nums.length;

  const quick = (l, r) => {
    if (l > r) return; //递归终止条件
    let random = Math.floor(Math.random() * (r - l + 1)) + l; //随机选取一个索引
    swap(nums, random, r); //将它和位置r的元素交换，让nums[r]作为基准元素

    //对基准元素进行partition
    let pivotIndex = partition(nums, l, r);
    //进行partition之后，基准元素左边的元素都小于它 右边的元素都大于它
    //如果partition之后，这个基准元素的位置pivotIndex正好是n-k 则找大了第k大的数
    //如果n-k<pivotIndex,则在pivotIndex的左边递归查找
    //如果n-k>pivotIndex，则在pivotIndex的右边递归查找
    if (n - k < pivotIndex) {
      quick(l, pivotIndex - 1);
    } else {
      quick(pivotIndex + 1, r);
    }
  };

  quick(0, n - 1); //函数开始传入的left=0，right= n - 1
  return nums[n - k]; //最后找到了正确的位置 也就是n-k等于pivotIndex 这个位置的元素就是第k大的数
};

function partition(nums, left, right) {
  let pivot = nums[right]; //最右边的元素为基准
  let pivotIndex = left; //pivotIndex初始化为left
  for (let i = left; i < right; i++) {
    //遍历left到right-1的元素
    if (nums[i] < pivot) {
      //如果当前元素比基准元素小
      swap(nums, i, pivotIndex); //把它交换到pivotIndex的位置
      pivotIndex++; //pivotIndex往前移动一步
    }
  }
  swap(nums, right, pivotIndex); //最后交换pivotIndex和right
  return pivotIndex; //返回pivotIndex
}

function swap(nums, p, q) {
  //交换数组中的两个元素
  const temp = nums[p];
  nums[p] = nums[q];
  nums[q] = temp;
}
