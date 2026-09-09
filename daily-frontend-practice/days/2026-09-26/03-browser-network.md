# 浏览器 / 网络 / 异步

## 题目要求

IntersectionObserver：解释 threshold、rootMargin；设计曝光埋点的去重键。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：IntersectionObserver：解释 threshold、rootMargin；设计曝光埋点的去重键。
- 输入/场景：IntersectionObserver 配置和一批曝光元素。
- 输出/作答：threshold/rootMargin 的含义、何时上报，以及防重复曝光 key。
- 具体例子：threshold=0.5 表示元素至少 50% 可见时触发；商品 key 可用 pageId+sku，Set 中已有则不再报。
- 关键边界：回调可能多次触发；元素离开再进入仍需按“一次曝光”规则去重。

## 自测清单

- 用自己的话解释核心概念或 API。
- 给出一个真实项目中会遇到的边界或失败场景。
- 说明一个可执行的处理策略、取舍或验证方式。

