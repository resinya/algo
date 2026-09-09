"use strict"; // Day 2 / Exercise 02

const assert = require("node:assert/strict");

/**
 * 中文解释（已给出）：检查每个右括号是否按嵌套顺序匹配最近一个尚未匹配的左括号。
 * 输入：只含 ()[]{} 的字符串 s。
 * 输出：全部括号正确配对返回 true，否则返回 false。
 * 具体例子："{[]}" -> true；"([)]" -> false，因为 ) 遇到的栈顶是 [。
 * 关键边界：空字符串有效；遍历结束后栈非空仍然无效。
 * @param {string} s
 * @returns {boolean}
 */
function isValidBrackets(s) {
  // TODO: 在这里写你的实现
  // throw new Error("TODO: implement isValidBrackets");
  if (s.length % 2 !== 0) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
    } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
      stack.pop();
    } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
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
