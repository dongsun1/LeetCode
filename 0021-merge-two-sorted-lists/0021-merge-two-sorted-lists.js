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
    let mergedlist = new ListNode
    let change = mergedlist;
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            change.next = l1;
            l1 = l1.next;
        } else {
            change.next = l2;
            l2 = l2.next;
        }
        change = change.next;
    }
    
    if(l1) change.next = l1;
    if(l2) change.next = l2;
    
    return mergedlist.next;
};

