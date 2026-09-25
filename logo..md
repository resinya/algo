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
