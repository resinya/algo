"use strict"; // Day 2 / Exercise 03

const assert = require("node:assert/strict");
const { run } = require("node:test");

/**
 * 以不超过 limit 的并发数执行任务，并按输入顺序返回结果。
 * 中文解释（已给出）：任务函数可以同时启动，但任意时刻运行数不能超过 limit；完成顺序可以不同，结果顺序必须和输入一致。
 * 输入：tasks 是返回 Promise 的函数数组，limit 是正整数并发上限。
 * 输出：Promise；全部成功时 resolve 为按任务原下标排列的结果数组，任一失败时 reject。
 * 具体例子：A 用 30ms、B 用 10ms、C 用 20ms，limit=2；虽然 B 先结束，最终仍得到 ["A", "B", "C"]。
 * 关键边界：tasks=[] 返回 Promise.resolve([])；非法 limit 同步抛 RangeError；失败后不再领取新任务。
 * @param {Array<() => Promise<unknown>>} tasks
 * @param {number} limit
 * @returns {Promise<unknown[]>}
 */
function promisePool(tasks, limit) {
  // TODO: 在这里写你的实现
  // throw new Error("TODO: implement promisePool");
  let result = [];
  return new Promise((resolve, reject) => {
    let index = 0; //当前任务索引
    let running = 0; //正在执行
    let completed = 0; //完成的

    function runNext() {
      if (completed === total) {
        resolve(results);
        return;
      }

      while (true) {
        const task = tasks[index];
        running++;
        Promise.resolve(task())
          .then((res) => {
            result[index++] = res;
          })
          .catch((err) => {
            reject(err);
          })
          .finally(() => {
            running--;
            completed++;
          });
      }
    }
    runNext();
  });
}

async function runTests() {
  assert.deepEqual(await promisePool([], 1), []);

  let running = 0;
  let peak = 0;
  const createTask = (ms, value) => () =>
    new Promise((resolve) => {
      running += 1;
      peak = Math.max(peak, running);
      setTimeout(() => {
        running -= 1;
        resolve(value);
      }, ms);
    });

  const tasks = [createTask(30, "A"), createTask(10, "B"), createTask(20, "C")];
  assert.deepEqual(await promisePool(tasks, 2), ["A", "B", "C"]);
  assert.ok(peak <= 2, `并发数超限：峰值为 ${peak}`);

  await assert.rejects(
    promisePool(
      [() => Promise.resolve("ok"), () => Promise.reject(new Error("failed"))],
      1,
    ),
    /failed/,
  );
  assert.throws(() => promisePool([], 0), RangeError);
  assert.throws(() => promisePool([], 1.5), RangeError);
  console.log("✅ 03 promise pool tests passed");
}

if (require.main === module) runTests();
module.exports = { promisePool };
