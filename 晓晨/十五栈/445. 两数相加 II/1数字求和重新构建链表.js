/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var addTwoNumbers = function(l1, l2) {
    let s1 = [],s2 = [], h1 = l1, h2 = l2;
    while (h1) {
        s1.push(h1.val);
        h1=h1.next;
    }
    while (h2) {
        s2.push(h2.val);
        h2=h2.next;
    }
    //使用BigInt类型，避免s显示为科学计数法
    let s = BigInt(BigInt(s1.join('')) +  BigInt(s2.join(''))).toString().split('').map((item) => Number(item)), h = new ListNode();
    let listHead = h;
    for (let i = 0; i < s.length; i++) {
        let node = new ListNode(s[i]);
        if (h) {
            h.next = node;
        }
        h = node;
    }
    return listHead.next;
};

addTwoNumbers([2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
    [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]);