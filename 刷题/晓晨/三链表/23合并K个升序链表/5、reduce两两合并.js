var mergeTwoLists = function (l1, l2) {
    if (!l2 || !l1) return l1 || l2;
    let cur = undefined;
    if (l1.val <= l2.val) {
        cur = new ListNode(l1.val);
        cur.next = mergeTwoLists(l1.next, l2)
    } else {
        cur = new ListNode(l2.val);
        cur.next = mergeTwoLists(l1, l2.next)
    }
    return cur;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];
    let head = mergeTwoLists(lists[0], lists[1]);
    for (let i = 2; i < lists.length - 1; i ++) {
        head = mergeTwoLists(head, lists[i])
    }
    return head
};