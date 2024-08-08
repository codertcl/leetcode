var addTwoNumbers = function (l1, l2) {
    let head = null, tail = null, carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10)
            tail = tail.next;
        }
        //计算进位
        carry = Math.floor(sum / 10)
        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    if (carry > 0) {
        //再添加一个元素
        tail.next = new ListNode(carry)
    }
    return head;
};
