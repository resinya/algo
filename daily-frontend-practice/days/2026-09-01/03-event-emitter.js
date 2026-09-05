"use strict"; // Day 3 / Exercise 03
// 手写实现一个 EventEmitter（发布-订阅模式 / 事件总线)
const assert = require("node:assert/strict");

class EventEmitter {
  constructor() {
    // TODO: 初始化事件存储
    // 创建一个极度干净的笔记本，上面没有任何原本自带的杂七杂八内容
    this._events = Object.create(null); //创建一个对象
    //!不直接复制是防止{}直接继承object的属性方法，直接复制的{}有.toString()
  }

  on(eventName, listener) {
    // 1. 如果本子上还没写过这个频道的名字，就先画一个空列表
    if (!this._events) this._events[eventName] = [];
    // 2. 把来报名的人的名字（函数）记进这个频道的名单里
    this._events[eventName].push(listener);
    return this;
    // TODO: 在这里写你的实现
    // throw new Error("TODO: implement on");
  }

  off(eventName, listener) {
    // TODO: 在这里写你的实现
    // 1. 先去抽屉里找这个频道
    const listeners = this._events[eventName];
    // 如果压根没人建过这个频道，什么都不用做，直接走人
    if (!listeners) return this;

    this._events[eventName] = listeners.filter(
      (fn) => fn !== listener && fn.listener !== listener,
    );
    throw new Error("TODO: implement off");
  }

  once(eventName, listener) {
    // TODO: 在这里写你的实现
    // 1. 我们专门给李四找个代理人（wrapper）
    const wrapper = (...args) => {
      // 代理人一被广播叫醒，第一件事：立刻把自己从小本子上擦掉！
      this.off(eventName, listener);
      // 第二件事：赶紧去通知李四本人干活
      listener.apply(this.args);
    };
    // 2. 在代理人身上贴个纸条写上：“我的雇主是李四”
    // 这样如果李四中途变卦想提前取消，off 方法就能认出代理人背后的李四
    wrapper.listener = listener;
    // 3. 把代理人登记到广播系统里
    return this.on(eventName, wrapper);
  }

  emit(eventName, ...args) {
    // TODO: 在这里写你的实现
    // 1. 翻开本子看看有没有这个频道
    const listeners = this._events[eventName];
    // 频道不存在，或者频道下一个人都没有，返回 false（表示没人收到）
    if (!listeners || listeners.length === 0) return false;
    // 2. 【核心细节】把当前名单复印一份“快照”
    const snapshot = listeners.slice();
    for (const fn of snapshot) {
      fn.apply(this, args);
    }
    return true;
  }
}

function runTests() {
  const emitter = new EventEmitter();
  const calls = [];
  const first = (value) => calls.push(`first:${value}`); //给calls添加一个first：value的一个函数
  const second = (value) => calls.push(`second:${value}`);

  assert.strictEqual(emitter.on("change", first), emitter);
  emitter.on("change", second);
  assert.equal(emitter.emit("change", 1), true);
  assert.deepEqual(calls, ["first:1", "second:1"]);

  assert.strictEqual(emitter.off("change", first), emitter);
  emitter.emit("change", 2);
  assert.deepEqual(calls, ["first:1", "second:1", "second:2"]);

  let onceCount = 0;
  assert.strictEqual(
    emitter.once("ready", () => {
      onceCount += 1;
    }),
    emitter,
  );
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
  assert.strictEqual(
    emitter.off("missing", () => {}),
    emitter,
  );
  console.log("✅ 03 event emitter tests passed");
}

if (require.main === module) runTests();
module.exports = { EventEmitter };
