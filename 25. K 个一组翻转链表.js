// prev 当前组前一个节点
// start 当前组第一个节点（翻转后变成尾
// end   当前组最后一个节点
// next   下一组开始节点

var reverseKGroup = function (head, k) {
  let dummy = new ListNdoe(0);
  dummy.next = head;
  let pre = dummy;
  while (true) {
    let end = pre;
    //for找到当前第k个节点
    for (let i = 0; i < k; i++) {
      end = end.next;
    }
    if (!end) break;
    const start = pre.next;
    const next = end.next;
    //断开链表
    end.next = null;
    //翻转当前链表
    pre.next = reverse(start);

    start.next = next;
    pre = start;
  }
  return dummy.next;
};

function reverse(head) {
  let prev = null;
  let cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev;
}
//先判断剩余节点是否够 k 个。够k个就翻转这一组
// 0       1       2     3     4
// dummy    -k-    end
// prev   start   -k-   next
//                 end -> null
//  1 -> 2 ->null    3 -> 4
