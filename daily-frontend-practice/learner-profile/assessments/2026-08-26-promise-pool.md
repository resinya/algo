# 2026-08-26：Promise 并发池（进行中）

## 当前证据

- 学习者独立识别出任务下标 `index`、已完成数量 `computed`、运行中数量 `isrunning` 三类调度状态，并尝试用 `try/finally` 在任务结束时回收并发名额。
- 当前卡点：`task()` 仅创建并返回 Promise；没有 `await` 或回调衔接时，`finally` 在 Promise 未完成前立即执行，导致运行中计数先加后减，实际不具备并发限制。

## 本轮指导

- 已给一级提示：先用一个延迟 Promise 跟踪 `task()`、`finally`、Promise 完成三者的时间顺序，再决定 `isrunning--` 放在何时发生。
