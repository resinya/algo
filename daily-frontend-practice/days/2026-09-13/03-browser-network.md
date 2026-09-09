# 浏览器 / 网络 / 异步

## 题目要求

Web Storage 异常：实现 `safeStorage`，处理 JSON 解析失败和不可用环境。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：Web Storage 异常：实现 `safeStorage`，处理 JSON 解析失败和不可用环境。
- 输入/场景：storage 对象、key、JSON 值与默认值。
- 输出/作答：safeGet/safeSet/remove 的成功结果；环境不可用或数据损坏时安全降级。
- 具体例子：storage.getItem("x") 返回 "{bad"，safeGet("x",[]) -> [] 并可报告解析错误。
- 关键边界：SSR 没有 window；隐私模式或容量不足时 setItem 可能抛异常。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

