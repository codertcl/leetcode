class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    //1:append() 往链表尾部追加数据
    append(data) {
        // 1、创建新节点
        const newNode = new ListNode(data);

        // 2、追加新节点
        if (this.length === 0) {
            // 链表长度为 0 时，即只有 head 的时候
            this.head = newNode;
        } else {
            // 链表长度大于 0 时，在最后面添加新节点
            let currentNode = this.head;
            // 当 currentNode.next 不为空时，
            // 循序依次找最后一个节点，即节点的 next 为 null 时
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            // 最后一个节点的 next 指向新节点
            currentNode.next = newNode;
        }
        // 3、追加完新节点后，链表长度 + 1
        this.length++;
    }


    //2:输出链表数值
    toString() {
        let res = '', tmp = this.head
        while (tmp) {
            res += tmp.val
            tmp = tmp.next
            if (tmp) {
                res += '——>'
            }
        }
        return res
    }

    //3:insert()在指定位置(position)插入节点
    insert(position, data) {
        if (position > this.length) {
            throw new Error(`position ${position}大于当前链表长度length ${this.length}`)
        }
        let node = new ListNode(data)
        //插入到列表头部
        if (position === 0) {
            node.next = this.head
            this.head = node//更新头结点
        }
        //插入到链表中间或者尾部
        else {
            //1:细分为插入到头 中间和尾
            // //this.head为第一个元素 (不含头节点的链表)
            // let cur = this.head, count = 0;
            // while (count++ !== position - 1) {
            //     cur = cur.next
            // }
            // //插入到链表中间 cur为插入位置的前一个节点
            // if (cur.next) {
            //     let tmp = cur.next
            //     cur.next = node
            //     node.next = tmp
            // }
            // //插入到链表结尾 cur为最后一个元素
            // else {
            //     cur.next = node
            // }

            /*
            * 2:合并插入到中间和最后的情况
            * prev为新节点前一个元素cur为新节点后一个元素(插入到最后时cur为null)
            * */
            let cur = this.head, prev = null, count = 0;
            while (count++ < position) {
                prev = cur;
                cur = cur.next
            }
            //下面可以交换顺序
            prev.next = node;
            node.next = cur;
        }
        this.length++
        return node
    }


    //4:getData(pos)
    getData(position) {
        if (position < 0 || position > this.length - 1) {
            throw new Error('下标越界')
        }
        let index = 0, cur = this.head
        while (index++ < position) {
            cur = cur.next
        }
        return cur.val
    }

    //5: indexOf() 方法
    indexOf(data) {
        // debugger
        let index = 0, cur = this.head
        while (cur && cur.val !== data) {
            cur = cur.next
            index++
        }
        return index > this.length - 1 ? -1 : index
    }

    //6:update(pos,data)更新某位置的元素的值
    update(pos, data) {
        if (pos < 0 || pos > this.length - 1) {
            throw new Error('下标越界')
        }
        let index = 0, cur = this.head
        while (index++ < pos) {
            cur = cur.next
        }
        cur.val = data
        return cur;
    }

    //7:删除pos对应元素
    removeAt(pos) {
        if (pos < 0 || pos > this.length - 1) {
            throw new Error('下标越界')
        }
        //删除第一个元素
        if (pos === 0) {
            this.head = this.head.next
            return this.head
        }
        let index = 0, cur = this.head, prev = null
        //prev为要删除节点的前一个 cur为要删除节点
        while (index++ < pos) {
            prev = cur
            cur = cur.next
        }
        prev.next = cur.next
        this.length--;
        return this.head
    }

    //8:remove(data) 删除指定 data 所在的节点
    remove(data) {
        let index = list.indexOf(data)
        // debugger
        if (index === -1) {
            throw new Error('该元素不存在')
        } else {
            return list.removeAt(index)
        }
    }

    //9:isEmpty()
    isEmpty() {
        return !!this.length
    }

    size() {
        return this.length;
    }
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let successor;
var reverseBetween = function (head, left, right) {
    // 反转以 head 为起点的 n 个节点，返回新的头结点
    let reverseN = (head, n) => {
        if (n === 1) {
            // 记录第 n + 1 个节点
            successor = head.next;
            return head;
        }
        // 以 head.next 为起点，需要反转前 n - 1 个节点
        let last = reverseN(head.next, n - 1);
        head.next.next = head;
        // 让反转之后的 head 节点和后面的节点连起来
        head.next = successor;
        return last;
    };
    if (left === 1) {
        // 相当于反转前 n 个元素
        return reverseN(head, right);
    }
    // 如果把head.next的索引视为 1 呢？那么相对于head.next，反转的区间应该是从第left - 1个元素开始的
    // 前进到反转的起点触发 base case
    head.next = reverseBetween(head.next, left - 1, right - 1);
    return head;
};
let list = new LinkedList()
list.append(3)
list.append(5)
console.log(list.toString())
console.log(reverseBetween(list.head, 1, 2));
