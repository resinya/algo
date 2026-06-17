var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0);
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 ? list1 : list2;
  return dummy.next;
};
// 两个链表本身升序，新建虚拟头节点，用指针依次比较两链表当前节点，把更小的接到结果链表后，最后接上剩余未遍历完的链表
//dummy = new ListNode -> 代表 表头
//cur = dummy
//return dummy.next
//list1 和 list2 都是指针
