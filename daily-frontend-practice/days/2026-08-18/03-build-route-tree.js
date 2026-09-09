"use strict"; // Day 1 / Exercise 03

const assert = require("node:assert/strict");
const path = require("node:path");
const { title } = require("node:process");

/**
 * 将带 path 的路由项转换成路径树。
 * 中文解释（已给出）：把 / 分隔的路由路径逐段建成节点，相同路径前缀只创建一次并被后续路由复用。
 * 输入：路由数组，每项含 path，可选 title，例如 [{path: "/user/list", title: "用户列表"}]。
 * 输出：路由树数组；节点含 name、完整 path、children，原路由有 title 时写到对应末级节点。
 * 具体例子：["/user/list", "/user/detail"] 会生成一个 /user 根节点，下面有 list 和 detail 两个子节点。
 * 关键边界：输入顺序任意；重复路径和首尾斜杠不应制造重复节点。
 * @param {Array<{path: string, title?: string}>} routes
 * @returns {Array<{name: string, path: string, title?: string, children: Array}>}
 */
function buildRouteTree(routes) {
  // 你的原代码缺少返回值
  let res = [];
  const map = new Map();
  for (const route of routes) {
    const prefixArr = prefixes(route);
    let parentNode = null;
    for (const item of prefixArr) {
      const node = map.get(item);
      if (!node) {
        const name = item.split("/").at(-1);
        node = {
          item,
          name,
          children: [],
        };
      }
      map.set(item, node);
      if (parentNode === null) {
        res.push(node);
      } else {
        parentNode.children.push(node);
      }
      parentNode = node;
    }
    if (Object.hasOwn(route, "title")) {
      parentNode.title = route.title;
    }
  }
  return res;
}
function prefixes(path) {
  const res = [];
  let cur = "";
  const prefixeArr = path.split("/");
  for (let i = 1; i < prefixeArr.length; i++) {
    cur += `/${prefixeArr[i]}`;
    res.push(cur);
  }
  return res;
}
// getPathPrefixes("/user/list");
// ["/user", "/user/list"]

buildRouteTree([
  { path: "/dashboard/analysis", title: "分析页" },
  { path: "/dashboard/workbench", title: "工作台" },
  { path: "/user/list", title: "用户列表" },
  { path: "/dashboard", title: "仪表盘" },
]);
function runTests() {
  const input = [
    { path: "/dashboard/analysis", title: "分析页" },
    { path: "/dashboard/workbench", title: "工作台" },
    { path: "/user/list", title: "用户列表" },
    { path: "/dashboard", title: "仪表盘" },
  ];
  const snapshot = JSON.stringify(input);

  assert.deepStrictEqual(buildRouteTree(input), [
    {
      name: "dashboard",
      path: "/dashboard",
      title: "仪表盘",
      children: [
        {
          name: "analysis",
          path: "/dashboard/analysis",
          title: "分析页",
          children: [],
        },
        {
          name: "workbench",
          path: "/dashboard/workbench",
          title: "工作台",
          children: [],
        },
      ],
    },
    {
      name: "user",
      path: "/user",
      children: [
        {
          name: "list",
          path: "/user/list",
          title: "用户列表",
          children: [],
        },
      ],
    },
  ]);

  assert.equal(JSON.stringify(input), snapshot, "不应修改输入");
  assert.deepStrictEqual(
    buildRouteTree([
      { path: "/a/b/", title: "B" },
      { path: "a/b", title: "B" },
    ]),
    [
      {
        name: "a",
        path: "/a",
        children: [{ name: "b", path: "/a/b", title: "B", children: [] }],
      },
    ],
  );

  console.log("✅ 03 buildRouteTree tests passed");
}

if (require.main === module) runTests();

module.exports = { buildRouteTree };
