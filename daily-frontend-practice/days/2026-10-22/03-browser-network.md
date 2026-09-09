# 浏览器 / 网络 / 异步

## 题目要求

登录态设计：比较 Cookie Session、JWT、刷新令牌的基本流程与 XSS/CSRF 风险。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：登录态设计：比较 Cookie Session、JWT、刷新令牌的基本流程与 XSS/CSRF 风险。
- 输入/场景：Web 登录需求，包括凭证保存、续期和跨站攻击风险。
- 输出/作答：Cookie Session、JWT/刷新令牌的流程对比和安全选择。
- 具体例子：HttpOnly+Secure+SameSite Cookie 可降低 token 被 JS 读取风险，但状态变更请求仍考虑 CSRF。
- 关键边界：localStorage 中 bearer token 暴露给 XSS；刷新令牌需轮换和撤销策略。

## 自测清单

- 用自己的话解释核心概念或 API。
- 给出一个真实项目中的边界或失败场景。
- 说明一个可执行的处理策略、取舍或验证方式。

