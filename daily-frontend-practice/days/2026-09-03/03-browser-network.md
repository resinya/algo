# 浏览器 / 网络 / 异步

## 题目要求

事件委托：为动态列表设计点击处理函数；用 `closest` 找目标，并说明为什么比逐项绑定更省资源。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：事件委托：为动态列表设计点击处理函数；用 `closest` 找目标，并说明为什么比逐项绑定更省资源。
- 输入/场景：一个容器元素，以及可能在之后动态加入的列表项点击事件。
- 输出/作答：一个绑在容器上的处理方案，能定位真正的目标项并解释资源优势。
- 具体例子：点击 button 内的 span 时，event.target.closest("button[data-id]") 找到按钮并读取 data-id。
- 关键边界：closest 结果可能为空；目标必须仍位于委托容器内部。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

冒泡机制，子元素触发后逐层冒泡到父级容器，所以再父级容器统一监听

```js
const container=document.querySelector()
container.addEventListener("click", (event) => {
    const btn event.target.closet("")
})
```
