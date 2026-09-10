# 浏览器 / 网络 / 异步

## 题目要求

URL 与 URLSearchParams：分别用原生 API 解析查询参数、重复键和 hash；比较其与手写解析器的取舍。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：URL 与 URLSearchParams：分别用原生 API 解析查询参数、重复键和 hash；比较其与手写解析器的取舍。
- 输入/场景：一个完整 URL，例如 https://site.test/search?tag=js&tag=ts#top。
- 输出/作答：pathname、查询参数、重复键数组和 hash，并说明原生 API 与手写方案的取舍。
- 具体例子：new URL(url).searchParams.getAll("tag") -> ["js","ts"]，url.hash -> "#top"。
- 关键边界：空值、+、百分号编码和重复键必须明确处理。

## 作答模板

- 核心概念：
- 关键流程或 API：
- 一个常见边界/风险：
- 真实项目中的处理策略：

```js
const myUrl = new URL("https://example.com/api/search?q=js&page=1#result");

// 1. 读取 URL 组成部分
console.log(myUrl.protocol); // 'https:'
console.log(myUrl.hostname); // 'example.com'
console.log(myUrl.pathname); // '/api/search'
console.log(myUrl.hash); // '#result'

// 2. 通过 searchParams 操作查询参数
myUrl.searchParams.set("page", "2"); // 修改现有参数
myUrl.searchParams.append("sort", "latest"); // 新增参数
myUrl.searchParams.delete("q"); // 删除参数
```
