"use strict"; // Day 2 / Exercise 02

const assert = require("node:assert/strict");

/** @param {string} s @returns {boolean} */
function isValidBrackets(s) {
  // TODO: 在这里写你的实现
  throw new Error("TODO: implement isValidBrackets");
}

function runTests() {
  assert.equal(isValidBrackets("()[]{}"), true);
  assert.equal(isValidBrackets("(]"), false);
  assert.equal(isValidBrackets("([)]"), false);
  assert.equal(isValidBrackets("{[]}"), true);
  assert.equal(isValidBrackets(""), true);
  assert.equal(isValidBrackets("(("), false);
  assert.equal(isValidBrackets("]"), false);
  console.log("✅ 02 valid brackets tests passed");
}

if (require.main === module) runTests();
module.exports = { isValidBrackets };
