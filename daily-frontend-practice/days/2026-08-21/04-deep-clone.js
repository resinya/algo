"use strict"; // Day 2 / Exercise 04

const assert = require("node:assert/strict");

/**
 * 深拷贝普通对象、数组、Date 与 RegExp，并支持循环引用。
 * @param {unknown} value
 * @returns {unknown}
 */
function deepClone(value) {
  // TODO: 在这里写你的实现
  throw new Error("TODO: implement deepClone");
}

function runTests() {
  const source = {
    user: { name: "Ada" },
    tags: ["js", { level: 2 }],
    createdAt: new Date("2026-08-21T00:00:00Z"),
    matcher: /a+b/gi,
  };
  source.matcher.lastIndex = 2;
  source.self = source;
  source.sameUser = source.user;

  const copy = deepClone(source);
  assert.notStrictEqual(copy, source);
  assert.notStrictEqual(copy.user, source.user);
  assert.notStrictEqual(copy.tags, source.tags);
  assert.notStrictEqual(copy.tags[1], source.tags[1]);
  assert.equal(copy.user.name, "Ada");
  assert.strictEqual(copy.self, copy);
  assert.strictEqual(copy.sameUser, copy.user);
  assert.notStrictEqual(copy.createdAt, source.createdAt);
  assert.equal(copy.createdAt.getTime(), source.createdAt.getTime());
  assert.notStrictEqual(copy.matcher, source.matcher);
  assert.equal(copy.matcher.source, source.matcher.source);
  assert.equal(copy.matcher.flags, source.matcher.flags);
  assert.equal(copy.matcher.lastIndex, 2);
  assert.strictEqual(deepClone(42), 42);
  assert.strictEqual(deepClone(null), null);
  console.log("✅ 04 deep clone tests passed");
}

if (require.main === module) runTests();
module.exports = { deepClone };
