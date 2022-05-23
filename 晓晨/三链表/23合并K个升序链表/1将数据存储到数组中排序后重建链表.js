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
    let arr = []
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        while (node) {
            arr.push(node.val)
            node = node.next
        }
    }
    arr.sort((a, b) => a - b)
    const res = new ListNode();
    let now = res;
    for (let i = 0; i < arr.length; i++) {
        now.next = new ListNode(arr[i])
        now = now.next
    }
    return res.next
};
