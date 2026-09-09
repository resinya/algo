# 浏览器 / 网络 / 异步

## 题目要求

AbortController 复习：解释一次取消如何传播到 fetch 和业务状态。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：AbortController 复习：解释一次取消如何传播到 fetch 和业务状态。
- 输入/场景：一个带 AbortSignal 的 fetch 与调用 controller.abort(reason) 的动作。
- 输出/作答：说明 signal.aborted 如何传到 fetch、错误分支与 UI 状态。
- 具体例子：搜索页取消旧请求后 fetch reject AbortError，业务层识别为 cancelled，不显示“网络失败”。
- 关键边界：同一 signal 可通知多个消费者；完成后仍应移除自定义监听。

## 自测清单

- 用自己的话解释核心概念或 API。
- 给出一个真实项目中会遇到的边界或失败场景。
- 说明一个可执行的处理策略、取舍或验证方式。

