"use strict"; // Day 2 / Exercise 03

const assert = require("node:assert/strict");

/**
 * 以不超过 limit 的并发数执行任务，并按输入顺序返回结果。
 * @param {Array<() => Promise<unknown>>} tasks
 * @param {number} limit
 * @returns {Promise<unknown[]>}
 */
function promisePool(tasks, limit) {
  // TODO: 在这里写你的实现
  throw new Error("TODO: implement promisePool");
}

async function runTests() {
  assert.deepEqual(await promisePool([], 1), []);

  let running = 0;
  let peak = 0;
  const createTask = (ms, value) => () => new Promise((resolve) => {
    running += 1;
    peak = Math.max(peak, running);
    setTimeout(() => { running -= 1; resolve(value); }, ms);
  });

  const tasks = [createTask(30, "A"), createTask(10, "B"), createTask(20, "C")];
  assert.deepEqual(await promisePool(tasks, 2), ["A", "B", "C"]);
  assert.ok(peak <= 2, `并发数超限：峰值为 ${peak}`);

  await assert.rejects(
    promisePool([() => Promise.resolve("ok"), () => Promise.reject(new Error("failed"))], 1),
    /failed/,
  );
  assert.throws(() => promisePool([], 0), RangeError);
  assert.throws(() => promisePool([], 1.5), RangeError);
  console.log("✅ 03 promise pool tests passed");
}

if (require.main === module) runTests();
module.exports = { promisePool };
