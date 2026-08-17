'use strict'; // Day 1 / Exercise 03

const assert = require('node:assert/strict');

/**
 * 将带 path 的路由项转换成路径树。
 * @param {Array<{path: string, title?: string}>} routes
 * @returns {Array<{name: string, path: string, title?: string, children: Array}>}
 */
function buildRouteTree(routes) {
  // TODO: 在这里写你的实现
  throw new Error('TODO: implement buildRouteTree');
}

function runTests() {
  const input = [
    { path: '/dashboard/analysis', title: '分析页' },
    { path: '/dashboard/workbench', title: '工作台' },
    { path: '/user/list', title: '用户列表' },
    { path: '/dashboard', title: '仪表盘' },
  ];
  const snapshot = JSON.stringify(input);

  assert.deepStrictEqual(buildRouteTree(input), [
    {
      name: 'dashboard',
      path: '/dashboard',
      title: '仪表盘',
      children: [
        {
          name: 'analysis',
          path: '/dashboard/analysis',
          title: '分析页',
          children: [],
        },
        {
          name: 'workbench',
          path: '/dashboard/workbench',
          title: '工作台',
          children: [],
        },
      ],
    },
    {
      name: 'user',
      path: '/user',
      children: [
        {
          name: 'list',
          path: '/user/list',
          title: '用户列表',
          children: [],
        },
      ],
    },
  ]);

  assert.equal(JSON.stringify(input), snapshot, '不应修改输入');
  assert.deepStrictEqual(
    buildRouteTree([
      { path: '/a/b/', title: 'B' },
      { path: 'a/b', title: 'B' },
    ]),
    [
      {
        name: 'a',
        path: '/a',
        children: [
          { name: 'b', path: '/a/b', title: 'B', children: [] },
        ],
      },
    ],
  );

  console.log('✅ 03 buildRouteTree tests passed');
}

if (require.main === module) runTests();

module.exports = { buildRouteTree };
