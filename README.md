# Algo：算法与前端手写训练仓库

这个仓库记录从 2026-06-17 开始的算法、前端手写与工程实践训练。

## 每日训练工作区

[daily-frontend-practice](./daily-frontend-practice/README.md) 是当前的主训练区：每天四题，题型覆盖算法、JavaScript 手写、浏览器/网络、工程小功能。

- [两个月训练日历](./daily-frontend-practice/curriculum/README.md)
- [学习状态与薄弱项](./daily-frontend-practice/learner-profile/CURRENT.md)
- [可视化破题课件](./daily-frontend-practice/lessons/)
- [教学约定](./daily-frontend-practice/AGENTS.md)

## 推荐使用方式

1. 打开当天的 `days/YYYY-MM-DD/questions.md`，先只看题目要求。
2. 在对应代码文件中先写“输入输出、状态、边界”中文注释，再开始实现。
3. 对可执行题运行 `node 文件名`，根据断言定位问题。
4. 写完后阅读当天对应的 `lessons/` 可视化课件：它用于复盘破题点和状态变化，不替代独立编码。
5. 直接在对话中贴代码、报错或思路；能力档案会根据实际证据更新。

## 目录说明

```text
algo/
├── daily-frontend-practice/
│   ├── days/                 # 每日题目、代码骨架与测试
│   ├── curriculum/           # 两个月排期与中文题目要求
│   ├── lessons/              # 每日四题的可视化破题课件
│   ├── learner-profile/      # 动态能力画像与评估证据
│   └── assets/               # 课件共享样式
└── README.md                 # 本入口文档
```
