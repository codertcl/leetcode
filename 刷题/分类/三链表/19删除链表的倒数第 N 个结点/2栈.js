var removeNthFromEnd = function (head, n) {
    let stack = new Array();
    let newListNode = new ListNode(0, head);
    let tempNode = newListNode;
    while (tempNode) {//不能是tepNode.next，不然最后一个指针不能存入
        stack.push(tempNode);
        tempNode = tempNode.next;//最后一个指针赋值的null，但不影响
    }
    let tempNum = n;
    while (tempNum) {
        stack.pop();
        tempNum--;
    }
    tempNode = stack.pop();
    tempNode.next = tempNode.next.next;
    return newListNode.next;
};
