# 浏览器 / 网络 / 异步

## 题目要求

Fetch 封装：设计请求、响应 JSON、非 2xx、网络错误四种路径的统一返回格式。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：Fetch 封装：设计请求、响应 JSON、非 2xx、网络错误四种路径的统一返回格式。
- 输入/场景：URL、fetch options，以及成功 JSON、非 2xx、网络断开等响应场景。
- 输出/作答：统一结果，例如成功 {ok:true,data}，失败 {ok:false,error:{type,status,message}}。
- 具体例子：服务器返回 404 JSON 时 fetch 本身通常仍 fulfilled，封装层需检查 response.ok 并返回 HTTP_ERROR。
- 关键边界：204 可能没有 JSON；JSON 解析失败与网络失败要能区分。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

