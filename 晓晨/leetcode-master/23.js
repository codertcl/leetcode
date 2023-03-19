//自顶而下归并 先分在合
var mergeKLists = function (lists) {
  // 当是空数组的情况下
  if (!lists.length) {
    return null;
  }
  // 合并两个排序链表
  const merge = (head1, head2) => {
    let dummy = new ListNode(0);
    let cur = dummy;
    // 新链表，新的值小就先接谁
    while (head1 && head2) {
      if (head1.val < head2.val) {
        cur.next = head1;
        head1 = head1.next;
      } else {
        cur.next = head2;
        head2 = head2.next;
      }
      cur = cur.next;
    }
    // 如果后面还有剩余的就把剩余的接上
    cur.next = head1 == null ? head2 : head1;
    return dummy.next;
  };
  const mergeLists = (lists, start, end) => {
    if (start + 1 == end) {
      return lists[start];
    }
    // 输入的k个排序链表，可以分成两部分，前k/2个链表和后k/2个链表
    // 如果将这前k/2个链表和后k/2个链表分别合并成两个排序的链表，再将两个排序的链表合并，那么所有链表都合并了
    let mid = (start + end) >> 1;
    let head1 = mergeLists(lists, start, mid);
    let head2 = mergeLists(lists, mid, end);
    return merge(head1, head2);
  };
  return mergeLists(lists, 0, lists.length);
};

//自底而上合并
var mergeKLists = function (lists) {
    if (lists.length <= 1) return lists[0] || null;//当归并的节点只有一个时 返回这个节点
    const newLists = [];
    //自底而上归并，第一次归并大小为2的链表，第二次归并大小4的链表...
    for (let i = 0; i < lists.length; i += 2) {
        newLists.push(merge(lists[i], lists[i + 1] || null));
    }
    return mergeKLists(newLists);
};

const merge = (list_1, list_2) => {//合并两个有序链表
  const dummyNode = new ListNode(0);
  let p = dummyNode;

  while (list_1 && list_2) {
      if (list_1.val < list_2.val) {//先将小的节点加入
          p.next = list_1;
          list_1 = list_1.next;
      } else {
          p.next = list_2;
          list_2 = list_2.next;
      }
      p = p.next;
  }

  p.next = list_1 ? list_1 : list_2;//遍历完成还有节点剩余
  return dummyNode.next;
};

//方法2
class Heap {
    constructor(comparator = (a, b) => a - b, data = []) {
        this.data = data;
        this.comparator = comparator;//比较器
        this.heapify();//堆化
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = Math.floor(this.size()/2)-1; i >= 0; i--) {
            this.bubbleDown(i);//bubbleDown操作
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];//查看堆顶
    }

    offer(value) {
        this.data.push(value);//加入数组
        this.bubbleUp(this.size() - 1);//调整加入的元素在小顶堆中的位置
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;//交换第一个元素和最后一个元素
            this.bubbleDown(0);//bubbleDown操作
        }
        return result;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;//父节点的位置
            //如果当前元素比父节点的元素小，就交换当前节点和父节点的位置
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);//交换自己和父节点的位置
                index = parentIndex;//不断向上取父节点进行比较
            } else {
                break;//如果当前元素比父节点的元素大，不需要处理
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;//最后一个节点的位置
        while (true) {
            const leftIndex = index * 2 + 1;//左节点的位置
            const rightIndex = index * 2 + 2;//右节点的位置
            let findIndex = index;//bubbleDown节点的位置
            //找出左右节点中value小的节点
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);//交换当前元素和左右节点中value小的
                index = findIndex;
            } else {
                break;
            }
        }
    }

    swap(index1, index2) {//交换堆中两个元素的位置
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    size() {
        return this.data.length;
    }
}

var mergeKLists = function(lists) {
    const res = new ListNode(0);
    let p = res;
    const h = new Heap(comparator = (a, b) => a.val - b.val);
    lists.forEach(l => {//插入每个链表的第一个节点
        if(l) h.offer(l);
    })
    while(h.size()) {//
        const n = h.poll();//取出最小值
        p.next = n;//最小值加入p的next后
        p = p.next;//移动p节点
        if(n.next) h.offer(n.next);//插入最小节点的后一个节点
    }
    return res.next;
};
