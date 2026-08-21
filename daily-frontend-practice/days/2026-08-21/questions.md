# 2026-08-21：算法高频与 JavaScript 手写（Day 2）

本轮提高算法比例，并保留两道大厂前端面试常见手写。每题先用一个样例画出变量变化，再开始写代码。

| # | 题目 | 类型 | 核心训练 | 难度 | 状态 |
|---|---|---|---|---|---|
| 1 | 无重复字符的最长子串 | 算法 | 滑动窗口、Map、窗口收缩 | 中等 | ⬜ 未开始 |
| 2 | 有效括号 | 算法 | 栈、映射、提前返回 | 简单 | ⬜ 未开始 |
| 3 | 手写 Promise 并发池 | JavaScript 手写 | 异步调度、下标、并发上限 | 中等 | ⬜ 未开始 |
| 4 | 手写深拷贝 | JavaScript 手写 | 引用类型、递归、循环引用缓存 | 中等 | ⬜ 未开始 |

---

## 01. 无重复字符的最长子串 `lengthOfLongestSubstring`

```js
function lengthOfLongestSubstring(s) {}
```

返回字符串中**不含重复字符**的最长连续子串长度。

```js
lengthOfLongestSubstring('abcabcbb') // 3，'abc'
lengthOfLongestSubstring('bbbbb')    // 1，'b'
lengthOfLongestSubstring('pwwkew')   // 3，'wke'
lengthOfLongestSubstring('')         // 0
```

验收：时间目标 `O(n)`；不要用双重循环枚举所有子串。

先回答：窗口右边新增一个字符时，什么情况下左边界必须移动？Map 中记录“字符最近出现的位置”能解决什么问题？

<details><summary>一级提示</summary>维护一个从左到右的窗口；窗口内始终不能有重复字符。</details>

---

## 02. 有效括号 `isValidBrackets`

```js
function isValidBrackets(s) {}
```

输入只含 `()[]{}`。每个左括号都能按正确顺序匹配右括号时返回 `true`。

```js
isValidBrackets('()[]{}') // true
isValidBrackets('(]')     // false
isValidBrackets('([)]')   // false
isValidBrackets('{[]}')   // true
isValidBrackets('')       // true
```

验收：使用一个栈；遍历完后还要判断栈是否为空。目标时间 `O(n)`，额外空间 `O(n)`。

<details><summary>一级提示</summary>左括号入栈；遇到右括号时，它只能匹配最后一个尚未匹配的左括号。</details>

---

## 03. 手写 Promise 并发池 `promisePool`

```js
function promisePool(tasks, limit) {}
```

`tasks` 是函数数组，每个函数调用后返回一个 Promise。最多同时执行 `limit` 个任务，最终返回一个 Promise，resolve 为与输入任务顺序一致的结果数组。

验收：空任务返回 `[]`；`limit` 非正整数时抛 `RangeError`；任一任务 reject 时整体 reject 且不再启动新任务；输出按输入顺序排列。

<details><summary>一级提示</summary>把 `nextIndex` 看成“下一个可领取任务号”。每个 worker 完成后，再领取一个任务，直到任务领完。</details>

---

## 04. 手写深拷贝 `deepClone`

```js
function deepClone(value) {}
```

支持普通对象、数组、`Date`、`RegExp` 与循环引用。函数、`Map`、`Set`、自定义类实例不在本题范围内，直接原样返回即可。

验收：不修改原值；嵌套对象/数组必须有新引用；保留循环关系；正则的 `source`、`flags`、`lastIndex` 正确。

<details><summary>一级提示</summary>递归前先问：这个对象以前是否已经克隆过？用 `WeakMap` 保存“原对象 → 克隆对象”。</details>

---

## 每题提交时说清楚

1. 你维护了哪些状态变量，它们表示什么？
2. 选一个样例，写出 2–3 次关键状态变化。
3. 时间和空间复杂度是什么？
4. 你主动测试的一个边界是什么？

先从第 1 题开始；写到任何位置都可以直接把代码贴给我。
