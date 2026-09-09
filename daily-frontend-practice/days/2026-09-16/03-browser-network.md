# 浏览器 / 网络 / 异步

## 题目要求

Web Worker：说明适用场景、消息传递、不能直接操作 DOM 的原因。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：Web Worker：说明适用场景、消息传递、不能直接操作 DOM 的原因。
- 输入/场景：一个 CPU 密集任务和需要保持响应的页面场景。
- 输出/作答：是否使用 Worker 的判断、主线程与 Worker 的消息结构及限制说明。
- 具体例子：主线程 postMessage({type:"SUM",numbers})，Worker 计算后回 {type:"RESULT",value}；页面期间仍可响应点击。
- 关键边界：Worker 不能直接访问 DOM；大量数据复制有成本，可讨论 Transferable。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

