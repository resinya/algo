# 回文链表

cur = head，用map对每个节点记录，然后while遍历指针cur，map有值就返回true，无值就map.set

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
dfs:
声明res结果，定义函数dfs，执行函数dfs。dfs传入tree，遍历tree，过滤children和剩余属性，解构：
const {children,...rest} = node
if有children？dfs(children)
bfs:
定义res结果，queue队列。while循环遍历
const node = queue.shift(),队首出列
const {children，...rest} = node
res.push(rest),存入结果
if(children){
queue.push(...children)
}
当前节点的子节点全部入队，下一层继续遍历
