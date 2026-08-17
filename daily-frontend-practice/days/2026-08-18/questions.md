# 2026-08-18：数据变形与字符串解析（Day 1）

今天四题都使用 JavaScript。建议总时长 90–120 分钟：前三题各 20–30 分钟，第四题 15–20 分钟，剩余时间用于测试和口述。

| # | 题目 | 重点 | 难度 | 状态 |
|---|---|---|---|---|
| 1 | 扁平列表转树 | `Map`、引用连接、复杂度 | 中等 | ⬜ 未开始 |
| 2 | 手写 URL 参数解析 | 编解码、重复键、边界 | 中等 | ⬜ 未开始 |
| 3 | 路径数组转路由树 | Trie 思想、增量建树 | 中等 | ⬜ 未开始 |
| 4 | 版本号比较 | 分段比较、精度陷阱 | 简单/中等 | ⬜ 未开始 |

---

## 01. 扁平列表转树 `listToTree`

### 题目

后端返回一个扁平节点列表，每个节点通过 `parentId` 指向父节点。实现：

```js
function listToTree(list, rootParentId = null) {}
```

将它转换成树形数组，每个输出节点都必须拥有 `children` 数组。

### 输入

```js
[
  { id: 2, parentId: 1, name: '研发部' },
  { id: 1, parentId: null, name: '总部' },
  { id: 4, parentId: 2, name: '前端组' },
  { id: 3, parentId: 1, name: '市场部' }
]
```

注意：子节点可能出现在父节点之前。

### 期望输出

```js
[
  {
    id: 1,
    parentId: null,
    name: '总部',
    children: [
      {
        id: 2,
        parentId: 1,
        name: '研发部',
        children: [
          { id: 4, parentId: 2, name: '前端组', children: [] }
        ]
      },
      { id: 3, parentId: 1, name: '市场部', children: [] }
    ]
  }
]
```

### 约束与验收

- 不修改输入数组及其中的原对象。
- 保持同级节点在原数组中的相对顺序。
- 空数组返回空数组。
- 基础题假设 `id` 唯一、父节点存在且数据无环。
- 目标时间复杂度 `O(n)`；完成后写出空间复杂度。

### 追问

- 如果父节点不存在，你会忽略、提升为根节点，还是抛错？为什么？
- 如何检测重复 `id` 和环？

### 提示（卡住再看）

<details><summary>一级提示</summary>先想办法让你能用 parentId 在常数时间找到父节点。</details>

<details><summary>二级提示</summary>第一轮创建所有带 children 的新节点并放进 Map；第二轮连接父子关系。</details>

---

## 02. 手写 URL 参数解析 `parseQuery`

### 题目

不使用 `URL`、`URLSearchParams` 或第三方库，实现：

```js
function parseQuery(input) {}
```

`input` 可以是完整 URL、以 `?` 开头的查询字符串，或纯查询字符串。

### 示例

```js
parseQuery(
  'https://example.com/search?name=%E5%BC%A0%E4%B8%89&tag=js&tag=ts&empty=&keyword=hello+world#result'
)
```

期望得到：

```js
{
  name: '张三',
  tag: ['js', 'ts'],
  empty: '',
  keyword: 'hello world'
}
```

### 规则与验收

- 忽略 `#` 及其后的 fragment。
- 键和值都要进行百分号解码。
- `+` 按空格处理。
- 没有 `=` 的 `?flag` 解析为 `{ flag: '' }`。
- 重复键：第一次是字符串；再次出现后聚合成数组并保持顺序。
- 空输入或无查询参数返回 `{}`。
- 不允许使用 `URL`、`URLSearchParams`。

### 追问

- `decodeURIComponent('%E0%A4%A')` 会怎样？生产代码应采用什么策略？
- 普通对象接收 `__proto__` 等键可能有什么风险？
- 完成手写后，真实项目里为什么通常优先用原生 `URLSearchParams`？

### 提示（卡住再看）

<details><summary>一级提示</summary>先统一截取真正的 query，再按 & 处理每个键值对。</details>

<details><summary>二级提示</summary>不要直接对整段 query 解码；应分别处理每个 key/value，并在解码前把 + 替换为空格。</details>

---

## 03. 路径数组转路由树 `buildRouteTree`

### 题目

这题与第 1 题不同：输入没有 `id/parentId`，父子关系藏在路径分段中。实现：

```js
function buildRouteTree(routes) {}
```

### 输入

```js
[
  { path: '/dashboard/analysis', title: '分析页' },
  { path: '/dashboard/workbench', title: '工作台' },
  { path: '/user/list', title: '用户列表' },
  { path: '/dashboard', title: '仪表盘' }
]
```

### 期望输出

```js
[
  {
    name: 'dashboard',
    path: '/dashboard',
    title: '仪表盘',
    children: [
      {
        name: 'analysis',
        path: '/dashboard/analysis',
        title: '分析页',
        children: []
      },
      {
        name: 'workbench',
        path: '/dashboard/workbench',
        title: '工作台',
        children: []
      }
    ]
  },
  {
    name: 'user',
    path: '/user',
    children: [
      {
        name: 'list',
        path: '/user/list',
        title: '用户列表',
        children: []
      }
    ]
  }
]
```

### 规则与验收

- 路径以 `/` 分隔；忽略首尾多余的 `/`。
- 中间层即使没有显式输入项也必须创建。
- 后出现的父路由信息要能补充到已创建的中间节点。
- 同一路径只生成一个节点。
- 根节点与兄弟节点按第一次遇到该路径段的顺序排列。
- 不修改输入。

### 追问

- 这与 Trie（前缀树）有什么相似之处？
- 如果同一路径出现两个不同 `title`，你会如何定义冲突策略？

### 提示（卡住再看）

<details><summary>一级提示</summary>逐条路径、逐个 segment 向下走；不存在就创建，存在就复用。</details>

<details><summary>二级提示</summary>每一层可以维护一个仅供查找的 Map，同时保留 children 数组控制输出顺序。</details>

---

## 04. 版本号比较 `compareVersions`

### 题目

实现纯数字版本号比较：

```js
function compareVersions(version1, version2) {}
```

- `version1 > version2` 返回 `1`
- `version1 < version2` 返回 `-1`
- 相等返回 `0`

### 规则与样例

版本号只包含数字和 `.`，每一段都至少有一位数字。

```js
compareVersions('1.0.10', '1.0.2') // 1
compareVersions('1.01', '1.001')   // 0
compareVersions('1.0', '1.0.0')    // 0
compareVersions('0.9.9', '1.0')    // -1
```

### 约束与验收

- 每段前导零不影响数值。
- 缺少的尾部段视为 `0`。
- 某一段可能远大于 `Number.MAX_SAFE_INTEGER`，不能依赖 `Number()` 或 `parseInt()` 得到精确结果。
- 不允许使用第三方 semver 库。

### 追问

- 去掉前导零后，如何不用大整数完成两个非负整数字符串的比较？
- 如果扩展到 `1.0.0-alpha.1`，当前规则为什么不够？

### 提示（卡住再看）

<details><summary>一级提示</summary>两个超长非负整数字符串可以先比有效长度，再按字典序比较。</details>

<details><summary>二级提示</summary>用双指针遍历版本段；每段先去前导零，空结果视作字符串 0。</details>

---

## 提交时请一起回答

每题用 2–4 句话说明：

1. 你的核心思路是什么？
2. 时间与空间复杂度是什么？
3. 你最担心哪个边界？

写完后告诉我“检查今天四题”，我会运行测试并逐题带你复盘，不会直接覆盖你的实现。
