"use strict"; // Day 1 / Exercise 01

const assert = require("node:assert/strict");

/**
 * 将 id/parentId 扁平列表转换为树。
 * @param {Array<Record<string, unknown>>} list
 * @param {unknown} rootParentId
 * @returns {Array<Record<string, unknown>>}
 */
function listToTree(list, rootParentId = null) {
  // TODO: 在这里写你的实现
  const map = new Map();
  for (const item of list) {
    const node = {
      ...item,
      children: [],
    };
    map.set(node.id, node);
  }
  const root = [];
  for (const item of list) {
    const node = map.get(item.id);
    if (node.parentId === rootParentId) {
      root.push(node);
    } else {
      const parent = map.get(item.parentId);
      parent.children.push(node);
    }
  }
  return root;

  // throw new Error("TODO: implement listToTree");
}

function runTests() {
  const input = [
    { id: 2, parentId: 1, name: "研发部" },
    { id: 1, parentId: null, name: "总部" },
    { id: 4, parentId: 2, name: "前端组" },
    { id: 3, parentId: 1, name: "市场部" },
  ];
  const snapshot = JSON.stringify(input);

  assert.deepStrictEqual(listToTree(input), [
    {
      id: 1,
      parentId: null,
      name: "总部",
      children: [
        {
          id: 2,
          parentId: 1,
          name: "研发部",
          children: [{ id: 4, parentId: 2, name: "前端组", children: [] }],
        },
        { id: 3, parentId: 1, name: "市场部", children: [] },
      ],
    },
  ]);
  assert.equal(JSON.stringify(input), snapshot, "不应修改输入");
  assert.deepStrictEqual(listToTree([]), []);

  console.log("✅ 01 listToTree tests passed");
}

if (require.main === module) runTests();

module.exports = { listToTree };
