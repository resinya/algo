"use strict"; // Day 1 / Exercise 03

const assert = require("node:assert/strict");
const path = require("node:path");
const { title } = require("node:process");

/**
 * 将带 path 的路由项转换成路径树。
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
