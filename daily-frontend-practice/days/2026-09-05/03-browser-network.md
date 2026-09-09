# 浏览器 / 网络 / 异步

## 题目要求

Cookie、localStorage、sessionStorage：写出三者对比表，并实现安全读写 JSON 的工具函数。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：Cookie、localStorage、sessionStorage：写出三者对比表，并实现安全读写 JSON 的工具函数。
- 输入/场景：要保存的 key/value，以及 Cookie、localStorage 或 sessionStorage 的使用场景。
- 输出/作答：三者对比表和 safeGet/safeSet JSON 工具的成功或失败结果。
- 具体例子：safeGet("profile", {}) 遇到值 "{bad" 时返回默认值 {}，而不是抛异常。
- 关键边界：存储可能不可用或超配额；Cookie 会随请求发送且受 SameSite/过期属性影响。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

