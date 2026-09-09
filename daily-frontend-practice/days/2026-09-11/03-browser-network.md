# 浏览器 / 网络 / 异步

## 题目要求

CORS：解释简单请求、预检请求、credentials 与常见失败原因。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：CORS：解释简单请求、预检请求、credentials 与常见失败原因。
- 输入/场景：前端源、目标 URL、方法、headers 和 credentials 配置。
- 输出/作答：判断是否预检、浏览器需要哪些响应头，以及失败原因。
- 具体例子：POST application/json 通常先发 OPTIONS；带 Cookie 时服务端需明确 Allow-Origin，不能使用 *，并允许 credentials。
- 关键边界：CORS 是浏览器读取限制，不是服务端请求失败；自定义头常触发预检。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

