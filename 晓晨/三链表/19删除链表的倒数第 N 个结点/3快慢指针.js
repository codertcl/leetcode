var removeNthFromEnd = function (head, n) {
    //构建头结点
    let newListNode = new ListNode(0, head);
    let frontward = newListNode;
    let backward = newListNode;
    let tempNum = 0;
    while (tempNum !== n) {
        frontward = frontward.next;
        tempNum++;
    }

    while (frontward.next) {//frontward指向最后一个结点即可。
        frontward = frontward.next;
        backward = backward.next;
    }
    //backward为删除节点的前驱节点
    backward.next = backward.next.next;
    return newListNode.next;
};
