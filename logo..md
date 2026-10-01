# 回文链表

声明数组，将链表的value放入数组
双指针对比，直到l<=r

# 环形链表

cur = head，用map对每个节点记录，然后while遍历指针cur，map有值就返回true，无值就map.set

用set去表示，set有值说明触发了

快慢指针，当fast===slow，再声明一个指针为cur=head，此时slow=slow.next
cur=cur.next，当cur=head时，就是环点

# 数组转树

先声明map，数组先用forEach遍历加上children属性，并map设数值
arr.forEach((item)=>map.set(item.id,{item,children:[]}))
第二次遍历，拿到当前map节点，判断parentId是否等于rootId
else{
const parentNode = map.get(item.parentId)
parentNode?.children.push()
}

# 树转数组

树是嵌套结构，需要把所有节点挨个访问，拍成一维数组
用dfs或者bfs

---

dfs:
声明res结果变量，定义函数dfs，执行函数dfs。dfs传入tree，遍历tree，过滤children和剩余属性，解构：
const {children,...rest} = node
if有children？dfs(children)

---

bfs:
定义res结果，queue队列。while循环遍历
const node = queue.shift(),队首出列
const {children，...rest} = node
res.push(rest),存入结果
if(children){
queue.push(...children)
}
当前节点的子节点全部入队，下一层继续遍历

# 合并两个有序链表

这个涉及改链表结构
const dummy = new ListNode()
let cur = dummy，比较list1和list2的大小，然后cur.next=list1/list2
同步更新list，以及cur=cur.next
最后拼接剩余的，cur = list1 ?? list2,返回dummy.next

# 两数相加

这部分涉及新建链表，老套路，new ListNode(0)给dummy，声明指针指向dummy
p1，p2分别指向l1和l2，声明进位carry=0。
循环遍历l2，l1，记录当前值，无则补0，计算sum，用floor计算进位，sum%10计算当前位
此时需要继续新建节点，cur.next=new ListNode(digit赋值),cur=cur.next
这个地方要注意就是当l1或者l2为null的时候，是不能继续next了，所以加个判断
if(l1)l1=l1.next

# 删除链表的倒数第 N 个结点

1. 首先获取链表长度len = 0，while{len++,cur=cur.next}
   边界处理，len===n,head.next,根据len，n，计算index
   循环index--，cur=cur.next,index--
   cur.next = cur.next.next\

# 两两交换链表中的节点

1. 哨兵模式：
   新建一个哨兵节点const dummy = new ListNode(0,head)
   声明一个指针prev，经过一个函数，最终返回dummy.next
   声明两个指针，first = prev.next
   这里为什么不写second = prev.next.next，如果这样写的话，两个节点都只和prev有关，prev一变，两个都变，所以用second = first.next
   这样second永远关联first。
   然后走while循环，条件是prev.next&&prev.next.next，然后就开始交换节点。first.next = second.next;second.next = first;prev.next = second;prev = first这一步去更新prev，循环结束，return dummy.next

# 反转链表

反转要有一个cur，当前节点，有一个prev前节点，还要记住cur.next的下一个节点，nxt
nxt = cur.next //记录cur的下一个节点
cur.next = prev //cur.next指向上一个节点
prev = cur //更新prev = cur
cur = nxt //更新cur = nxt
0 <- 1 -> 2 3
prev cur nxt

# 反转链表2

12345 --> 14325 反转了234
p0是1，2指向null，4是pre，5是cur指向null
把反转的上一个节点叫p0。
p0.next指向cur，p0指向pre
dummy = new ListNode(p0,head)
循环left-1次，到达反转的上一个节点，
let pre = null;cur = p0.next
for(0<right-left+1){
nxt = cur.next
cur.next = per
prv = cur
cur = nxt
}
p0.next.next = cur
p0.next = pre
return dummy.next

# K 个一组翻转链表

第一步，求出列表长度，声明哨兵节点dummy，p0 = dummy

```js
var reverseKGroup = function (head, k) {
  let cur = head;
  let n = 0;
  while (cur) {
    n++;
    cur = cur.next;
  }
  let dummy = new ListNode(0, head);
  let p0 = dummy;
  while (n >= k) {
    n -= k;
    let pre = null;
    cur = p0.next;
    for (let i = 0; i < k; i++) {
      let nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt;
    }
    let neet = p0.next;
    p0.next.next = cur;
    p0.next = pre;
    p0 = neet;
  }
  return dummy.next;
};
```

# 随机链表的复制

// 复制每个节点，把新节点直接插到原节点的后面
for(let cur=head;cur;cur=cur.next.next){
cur.next=new \_Node(cur.val,cur.next,null)
}
// 遍历交错链表中的原链表节点
for(let cur=head;cur;cur=cur.next.next){
if(cur.random){
cur.next.random=cur.random.next
}
}
// 把交错链表分离成两个链表
const dummy=new \_Node()
tail,cur
const copy = cur.next;tail.next = copy;cur.next = copy.next
return dummy.next

# 排序链表

遍历链表，把每一个值放入数组，数组排序，遍历数组，每次新建节点

# LRU缓存

使用双向链表，节约开销，而不是使用数组。
