# 浏览器 / 网络 / 异步

## 题目要求

AbortController：为 fetch 增加超时取消；区分超时、主动取消、网络失败。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：AbortController：为 fetch 增加超时取消；区分超时、主动取消、网络失败。
- 输入/场景：fetch 请求、超时毫秒数、可选的外部 AbortSignal。
- 输出/作答：成功数据，或明确分类为 timeout、aborted、network 的错误。
- 具体例子：timeout=1000ms，接口 2s 才响应 -> 1s 时 controller.abort()，结果 type="timeout"。
- 关键边界：请求完成后清除定时器；主动取消与超时不能都被笼统标成网络失败。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

