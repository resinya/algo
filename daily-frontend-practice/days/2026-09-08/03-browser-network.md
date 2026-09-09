# 浏览器 / 网络 / 异步

## 题目要求

Promise 链：手写 `then` 的最小行为说明；解释值透传、返回 Promise 与错误冒泡。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：Promise 链：手写 `then` 的最小行为说明；解释值透传、返回 Promise 与错误冒泡。
- 输入/场景：一条包含多个 then、返回普通值、返回 Promise 和 throw 的 Promise 链。
- 输出/作答：每个 then/catch 接收到的值或错误，以及完整执行顺序。
- 具体例子：Promise.resolve(1).then(x=>x+1).then(console.log) 最终打印 2；若回调 throw，则跳到最近 catch。
- 关键边界：缺少成功或失败处理器时要值透传/错误冒泡；返回 Promise 时后续必须等待。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

