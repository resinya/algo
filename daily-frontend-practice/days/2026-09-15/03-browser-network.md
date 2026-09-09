# 浏览器 / 网络 / 异步

## 题目要求

事件循环：解释 async/await 在 await 前后分别处于什么队列与执行阶段。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：事件循环：解释 async/await 在 await 前后分别处于什么队列与执行阶段。
- 输入/场景：一段含 async 函数、await、Promise.then、setTimeout 的代码。
- 输出/作答：打印顺序，并指出 await 前同步执行、await 后作为微任务继续。
- 具体例子：async function f(){console.log(1);await 0;console.log(2)}; f();console.log(3) -> 1、3、2。
- 关键边界：await 非 Promise 值也会异步恢复；微任务之间按入队顺序执行。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

