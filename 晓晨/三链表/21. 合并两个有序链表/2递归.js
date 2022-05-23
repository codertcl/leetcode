/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    //递归的结束条件，如果l1和l2中有一个为空就返回
    if (l1 == null || l2 == null) {
        return l1 == null ? l2 : l1;
    }
    //如果l1的值<=l2的值，就继续递归，比较l1.next的值和l2的值
    if (l1.val <= l2.val) {
        //l1.next和l2比较完后，会产生一个更小的节点x，将x加到当前l1的后面
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        //如果l1的值>l2的值，就继续递归，比较l1的值和l2.next的值
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
