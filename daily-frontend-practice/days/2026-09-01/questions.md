# 2026-09-01：算法迁移与前端状态设计（Day 3）

今天保持 2 道算法题，并加入 1 道 JavaScript 高频手写和 1 个小型前端状态模块。第 1 题用于检验滑动窗口能否从“去重窗口”迁移到“满足和的窗口”。

| # | 题目 | 类型 | 核心训练 | 难度 | 状态 |
|---|---|---|---|---|---|
| 1 | 长度最小的子数组 | 算法复习变式 | 滑动窗口、窗口收缩、不变式 | 中等 | ⬜ 未开始 |
| 2 | 合并区间 | 算法 | 排序、区间关系、单次扫描 | 中等 | ⬜ 未开始 |
| 3 | 手写 EventEmitter | JavaScript 手写 | Map/Set、订阅发布、一次性监听 | 中等 | ⬜ 未开始 |
| 4 | 最近搜索记录模块 | 前端工程小功能 | 状态封装、去重、容量淘汰、不可变快照 | 简单/中等 | ⬜ 未开始 |

---

## 01. 长度最小的子数组 `minSubArrayLen`

```js
function minSubArrayLen(target, nums) {}
```

给定一个正整数 `target` 和一个只包含正整数的数组 `nums`，返回元素之和大于等于 `target` 的最短连续子数组长度；不存在时返回 `0`。

```js
minSubArrayLen(7, [2, 3, 1, 2, 4, 3]) // 2，对应 [4, 3]
minSubArrayLen(4, [1, 4, 4])          // 1
minSubArrayLen(11, [1, 1, 1, 1])     // 0
```

约束与验收：

- `target` 为正整数，`nums` 只包含正整数。
- 不修改输入数组。
- 时间目标 `O(n)`，不能枚举全部子数组。
- 无解返回 `0`，不要返回 `Infinity`。

动手前先写：窗口内维护的和是什么？什么时候扩张右边界？什么时候可以连续收缩左边界？

<details><summary>一级提示</summary>所有元素都是正数，所以右边加入元素时窗口和只会变大；满足条件后，尝试从左边移除元素以得到更短答案。</details>

---

## 02. 合并区间 `mergeIntervals`

```js
function mergeIntervals(intervals) {}
```

输入若干闭区间 `[start, end]`，合并所有重叠或端点相接的区间，按起点升序返回。输入顺序不保证有序。

```js
mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])
// [[1, 6], [8, 10], [15, 18]]

mergeIntervals([[1, 4], [4, 5]])
// [[1, 5]]
```

约束与验收：

- 每个区间都满足 `start <= end`。
- 空数组返回 `[]`。
- 不修改输入数组及其中的区间。
- 目标时间 `O(n log n)`，额外空间 `O(n)`。

动手前先写：排序后，当前区间只需要和结果中的哪个区间比较？“重叠”和“不重叠”的判断式分别是什么？

<details><summary>一级提示</summary>先按起点排序；结果数组最后一个区间代表目前已经合并出的最右区间。</details>

---

## 03. 手写 EventEmitter

```js
class EventEmitter {
  on(eventName, listener) {}
  off(eventName, listener) {}
  once(eventName, listener) {}
  emit(eventName, ...args) {}
}
```

实现一个简化版事件中心：

- `on` 注册监听器，并返回当前实例以支持链式调用。
- `off` 移除指定监听器，并返回当前实例；监听器不存在时不报错。
- `once` 注册只执行一次的监听器，并返回当前实例。
- `emit` 按注册顺序同步调用监听器并透传参数；存在监听器时返回 `true`，否则返回 `false`。
- 同一事件可以注册多个不同监听器。
- 一次 `emit` 过程中新增或删除监听器，不应改变本次已经确定的调用队列。

动手前先写：`Map` 的 key/value 分别是什么？`once` 如何在第一次调用后解除自己？为什么 `emit` 时要先取得监听器快照？

<details><summary>一级提示</summary>可以用 `Map&lt;eventName, Set&lt;listener&gt;&gt;` 保存订阅；触发时遍历当前集合的浅拷贝。</details>

---

## 04. 最近搜索记录模块 `createSearchHistory`

```js
function createSearchHistory(options) {}
```

实现一个不依赖框架的最近搜索记录模块。`options.limit` 表示最多保留几条，默认值为 `5`。返回对象包含：

```js
const history = createSearchHistory({ limit: 3 });

history.add('JavaScript');
history.add('React');
history.add('JavaScript');
history.list();            // ['JavaScript', 'React']
history.remove('React');
history.clear();
```

行为要求：

- `add(keyword)` 先对字符串执行 `trim()`；空字符串不记录。
- 相同关键词再次加入时，移动到最前面，不产生重复项。
- 列表按“最近使用优先”排列，超过 `limit` 时淘汰最旧记录。
- `remove(keyword)` 删除指定关键词；不存在时不报错。
- `clear()` 清空记录。
- `list()` 返回数组快照，调用者修改该数组不能影响内部状态。
- `limit` 不是正整数时同步抛出 `RangeError`。

动手前先写：内部唯一状态是什么？`add` 操作可以拆成哪三个有顺序的步骤？为什么 `list` 不能直接暴露内部数组？

<details><summary>一级提示</summary>加入一项时可以依次执行“规范化 → 删除旧位置 → 插到头部并裁剪”。</details>

---

## 每题提交时说清楚

1. 你维护了哪些状态，它们分别表示什么？
2. 用一个样例写出至少 3 次关键状态变化。
3. 时间和空间复杂度是什么？
4. 你在编码前主动列出的边界是什么？

从第 1 题开始。先写窗口状态与收缩条件，再把实现贴给我；不要求一次写完。
