# 浏览器 / 网络 / 异步

## 题目要求

宏任务与微任务：预测给定 `Promise`、`queueMicrotask`、`setTimeout` 的打印顺序，并写出原因。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：宏任务与微任务：预测给定 `Promise`、`queueMicrotask`、`setTimeout` 的打印顺序，并写出原因。
- 输入/场景：一段同时包含同步代码、Promise、queueMicrotask 和 setTimeout 的代码。
- 输出/作答：准确的打印顺序，以及每一步属于同步、微任务还是宏任务的中文原因。
- 具体例子：console.log("A"); Promise.resolve().then(()=>console.log("B")); setTimeout(()=>console.log("C")); 输出 A、B、C。
- 关键边界：本轮同步代码结束后先清空微任务，再执行下一个宏任务。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

