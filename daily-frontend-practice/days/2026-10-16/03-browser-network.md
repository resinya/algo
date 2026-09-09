# 浏览器 / 网络 / 异步

## 题目要求

MutationObserver：说明监听配置、回调时机、断开监听。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：MutationObserver：说明监听配置、回调时机、断开监听。
- 输入/场景：观察目标节点、childList/attributes/subtree 配置和 DOM 变更。
- 输出/作答：MutationRecord 批次、回调时机和 disconnect 清理说明。
- 具体例子：观察 attributes 后 element.setAttribute("data-x","1")，同步代码结束后的微任务检查点收到 attributes 记录。
- 关键边界：配置必须至少启用一种观察；回调可能合并多次变更；销毁时 disconnect。

## 自测清单

- 用自己的话解释核心概念或 API。
- 给出一个真实项目中的边界或失败场景。
- 说明一个可执行的处理策略、取舍或验证方式。

