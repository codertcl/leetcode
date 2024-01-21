//方法1:
class Heap {
  constructor(comparator = (a, b) => a - b, data = []) {
    this.data = data;
    this.comparator = comparator; //比较器
    this.heapify(); //堆化
  }

  heapify() {
    if (this.size() < 2) return;
    for (let i = Math.floor(this.size() / 2) - 1; i >= 0; i--) {
      this.bubbleDown(i); //bubbleDown操作
    }
  }

  peek() {
    if (this.size() === 0) return null;
    return this.data[0]; //查看堆顶
  }

  offer(value) {
    this.data.push(value); //加入数组
    this.bubbleUp(this.size() - 1); //调整加入的元素在小顶堆中的位置
  }

  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last; //交换第一个元素和最后一个元素
      this.bubbleDown(0); //bubbleDown操作
    }
    return result;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1; //父节点的位置
      //如果当前元素比父节点的元素小，就交换当前节点和父节点的位置
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex); //交换自己和父节点的位置
        index = parentIndex; //不断向上取父节点进行比较
      } else {
        break; //如果当前元素比父节点的元素大，不需要处理
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.size() - 1; //最后一个节点的位置
    while (true) {
      const leftIndex = index * 2 + 1; //左节点的位置
      const rightIndex = index * 2 + 2; //右节点的位置
      let findIndex = index; //bubbleDown节点的位置
      //找出左右节点中value小的节点
      if (leftIndex <= lastIndex && this.comparator(this.data[leftIndex], this.data[findIndex]) < 0) {
        findIndex = leftIndex;
      }
      if (rightIndex <= lastIndex && this.comparator(this.data[rightIndex], this.data[findIndex]) < 0) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex); //交换当前元素和左右节点中value小的
        index = findIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    //交换堆中两个元素的位置
    [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
  }

  size() {
    return this.data.length;
  }
}

var maxSlidingWindow = function (nums, k) {
  let ans = [];
  let heap = new Heap((a, b) => b.val - a.val); //大顶堆
  for (let i = 0; i < k - 1; i++) heap.offer({ val: nums[i], index: i }); //初始的时候将0～k-1的元素加入堆中
  for (let i = k - 1; i < nums.length; i++) {
    //滑动窗口从从索引为k-1的元素开始遍历
    heap.offer({ val: nums[i], index: i }); //将新进入滑动窗口的元素加堆中
    //当堆顶元素不在滑动窗口中的时候，不断删除堆顶堆元素，直到最大值在滑动窗口里。
    while (heap.peek().index <= i - k) heap.poll();
    ans.push(heap.peek().val); //将在滑动窗口里的最大值加入ans
  }
  return ans;
};

//方法2
var maxSlidingWindow = function (nums, k) {
  const q = []; //单递减的双端队列
  const ans = []; //最后的返回结果
  for (let i = 0; i < nums.length; i++) {
    //循环nums
    //当进入滑动窗口的元素大于等于队尾的元素时 不断从队尾出队，
    //直到进入滑动窗口的元素小于队尾的元素，以保证单调递减的性质
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i); //元素的索引入队
    while (q[0] <= i - k) {
      //队头元素已经在滑动窗口外了，移除对头元素
      q.shift();
    }
    //当滑动窗口大于等于k-1的时候，单调递减队头就是滑动窗口的最大值
    if (i >= k - 1) ans.push(nums[q[0]]);
  }
  return ans;
};

