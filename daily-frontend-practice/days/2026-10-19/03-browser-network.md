# 浏览器 / 网络 / 异步

## 题目要求

ResizeObserver：说明为何比 window resize 更适合监听元素尺寸。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：ResizeObserver：说明为何比 window resize 更适合监听元素尺寸。
- 输入/场景：某个会因容器布局变化而变宽的元素。
- 输出/作答：选择 ResizeObserver 的原因和尺寸变化处理流程。
- 具体例子：侧栏展开导致 card 宽度改变但 window 未 resize；ResizeObserver 仍能通知 card 的 contentRect。
- 关键边界：回调中反复改尺寸可能形成循环；组件销毁要 disconnect。

## 自测清单

- 用自己的话解释核心概念或 API。
- 给出一个真实项目中的边界或失败场景。
- 说明一个可执行的处理策略、取舍或验证方式。

