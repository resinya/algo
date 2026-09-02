"use strict"; // Day 3 / Exercise 03

const assert = require("node:assert/strict");

class EventEmitter {
  constructor() {
    // TODO: 初始化事件存储
  }

  on(eventName, listener) {
    // TODO: 在这里写你的实现
    throw new Error("TODO: implement on");
  }

  off(eventName, listener) {
    // TODO: 在这里写你的实现
    throw new Error("TODO: implement off");
  }

  once(eventName, listener) {
    // TODO: 在这里写你的实现
    throw new Error("TODO: implement once");
  }

  emit(eventName, ...args) {
    // TODO: 在这里写你的实现
    throw new Error("TODO: implement emit");
  }
}

function runTests() {
  const emitter = new EventEmitter();
  const calls = [];
  const first = (value) => calls.push(`first:${value}`);
  const second = (value) => calls.push(`second:${value}`);

  assert.strictEqual(emitter.on("change", first), emitter);
  emitter.on("change", second);
  assert.equal(emitter.emit("change", 1), true);
  assert.deepEqual(calls, ["first:1", "second:1"]);

  assert.strictEqual(emitter.off("change", first), emitter);
  emitter.emit("change", 2);
  assert.deepEqual(calls, ["first:1", "second:1", "second:2"]);

  let onceCount = 0;
  assert.strictEqual(emitter.once("ready", () => { onceCount += 1; }), emitter);
  emitter.emit("ready");
  emitter.emit("ready");
  assert.equal(onceCount, 1);

  const mutationCalls = [];
  const late = () => mutationCalls.push("late");
  emitter.on("mutation", () => {
    mutationCalls.push("first");
    emitter.on("mutation", late);
  });
  emitter.emit("mutation");
  assert.deepEqual(mutationCalls, ["first"], "本轮新增监听器不应立即执行");
  emitter.emit("mutation");
  assert.deepEqual(mutationCalls, ["first", "first", "late"]);

  assert.equal(emitter.emit("missing"), false);
  assert.strictEqual(emitter.off("missing", () => {}), emitter);
  console.log("✅ 03 event emitter tests passed");
}

if (require.main === module) runTests();
module.exports = { EventEmitter };
