# 浏览器 / 网络 / 异步

## 题目要求

浏览器渲染流程：解释 JS、style、layout、paint、composite 的顺序，并指出读写布局如何造成强制同步布局。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：浏览器渲染流程：解释 JS、style、layout、paint、composite 的顺序，并指出读写布局如何造成强制同步布局。
- 输入/场景：一段先读取 offsetHeight、再修改 style、又立即读取布局的 DOM 代码。
- 输出/作答：渲染阶段顺序说明，并指出哪次读写可能触发强制同步布局。
- 具体例子：element.style.width="100px" 后立刻读取 element.offsetWidth，浏览器可能被迫提前完成 style 与 layout。
- 关键边界：transform/opacity 通常只涉及 composite，但实际优化仍要用性能工具验证。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

