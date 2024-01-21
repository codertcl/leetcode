/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let cur = head, len = 1;
    while (cur.next) {
        cur = cur.next
        len++
    }
    cur = head;
    let l = 1
    while (l!==len-n) {
        cur = cur.next
        l++
    }
    cur.next=cur.next.next
    return head
};

//
var removeNthFromEnd = function(head, n) {
    let len=0,count=0,listNode=new ListNode(0,head);
    let listNode2=listNode,listNode3=listNode;
    while(listNode2.next){
        listNode2=listNode2.next;
        len++;
    }
    //删除第len-n+1个
    while(count!=len-n){
        listNode3=listNode3.next;
        count++;
    }
    listNode3.next=listNode3.next.next;
    return listNode.next;
};
