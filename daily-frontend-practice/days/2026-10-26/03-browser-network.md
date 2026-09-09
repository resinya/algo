# 浏览器 / 网络 / 异步

## 题目要求

CI/CD 基础：解释 lint、test、build、preview、production 的典型顺序。

## 中文解释（已给出）

- 意思：这道题要你分析或完成：CI/CD 基础：解释 lint、test、build、preview、production 的典型顺序。
- 输入/场景：一次提交及 lint/test/build/preview/production 阶段。
- 输出/作答：推荐流水线顺序与每阶段失败是否阻断。
- 具体例子：lint 失败立即停止；test 通过后 build；preview 验证产物后才 production。
- 关键边界：并行化不能破坏依赖；密钥和环境配置按阶段隔离。

## 自测清单

- 用自己的话解释核心概念或 API。
- 给出一个真实项目中的边界或失败场景。
- 说明一个可执行的处理策略、取舍或验证方式。

