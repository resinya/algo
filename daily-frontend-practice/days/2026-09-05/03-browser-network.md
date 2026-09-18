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

xss（跨站脚本攻击）本质是将js脚本注入你访问的网页里，通过document.cookie，获取cookie
csrf（跨站请求伪造）访问恶意网站，利用cookie自动携带特性去请求接口
smaeSite设置Lax，允许跳转链接携带，禁止跨站post请求，iframe，ajax携带

解决方案：
服务端生成token给表单，请求必须带上，后端校验
后端校验白名单，请求投的来源域名

```
cookie 浏览器自动携带 可设置过期时间 设置HttpOnly防XSS，禁止js通过document.cookie拿到cookie，设置secure属性，只允许https携带cookie
localStorage 本地存储 一般用于主题切换，手动更新
sessionStorage 仅当前会话有效
```
