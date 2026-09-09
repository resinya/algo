"use strict"; // Day 3 / Exercise 04

const assert = require("node:assert/strict");

/**
 * @param {{ limit?: number }} [options]
 * @returns {{
 *   add(keyword: string): void,
 *   remove(keyword: string): void,
 *   clear(): void,
 *   list(): string[]
 * }}
 */
function createSearchHistory(options = {}) {
  // TODO: 在这里写你的实现
  // throw new Error("TODO: implement createSearchHistory");
  const { limit = 5 } = options;
  
}

function runTests() {
  const history = createSearchHistory({ limit: 3 });

  history.add("  JavaScript  ");
  history.add("React");
  history.add("CSS");
  assert.deepEqual(history.list(), ["CSS", "React", "JavaScript"]);

  history.add("JavaScript");
  assert.deepEqual(history.list(), ["JavaScript", "CSS", "React"]);

  history.add("Vue");
  assert.deepEqual(history.list(), ["Vue", "JavaScript", "CSS"]);

  history.add("   ");
  assert.deepEqual(history.list(), ["Vue", "JavaScript", "CSS"]);

  const exposed = history.list();
  exposed.push("should-not-leak");
  assert.deepEqual(history.list(), ["Vue", "JavaScript", "CSS"]);

  history.remove("JavaScript");
  history.remove("missing");
  assert.deepEqual(history.list(), ["Vue", "CSS"]);

  history.clear();
  assert.deepEqual(history.list(), []);

  const defaultHistory = createSearchHistory();
  ["a", "b", "c", "d", "e", "f"].forEach((item) => defaultHistory.add(item));
  assert.deepEqual(defaultHistory.list(), ["f", "e", "d", "c", "b"]);

  assert.throws(() => createSearchHistory({ limit: 0 }), RangeError);
  assert.throws(() => createSearchHistory({ limit: 1.5 }), RangeError);
  console.log("✅ 04 search history tests passed");
}

if (require.main === module) runTests();
module.exports = { createSearchHistory };
