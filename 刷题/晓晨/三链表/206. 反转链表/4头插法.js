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
