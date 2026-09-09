"use strict"; // Day 1 / Exercise 04

const assert = require("node:assert/strict");

/**
 * 比较仅包含数字和点号的版本号。
 * 中文解释（已给出）：按点号逐段比较数值，不能把整个版本号当小数，也不能因超大数字超过 Number 精度而判断错误。
 * 输入：两个版本字符串 version1、version2，例如 "1.0.10" 与 "1.0.2"。
 * 输出：version1 更大返回 1，更小返回 -1，数值等价返回 0。
 * 具体例子：compareVersions("1.01", "1.001") -> 0，因为 01 与 001 的数值都等于 1。
 * 关键边界：缺失段按 0；前导零忽略；单段可能超过安全整数。
 * @param {string} version1
 * @param {string} version2
 * @returns {-1 | 0 | 1}
 */
// function compareVersions(version1, version2) {
//   // TODO: 在这里写你的实现
//   let res = -1;
//   const version1Arr = version1.split(".");
//   const version2Arr = version2.split(".");
//   let len1 = version1Arr.length;
//   let len2 = version2Arr.length;
//   let index1 = len1;
//   let index2 = len2;
//   while (index1 > index2) {
//     version2Arr.push("0");
//     index1--;
//   }
//   while (index1 < index2) {
//     version2Arr.push("0");
//     index2--;
//   }
//   len1 = version1Arr.length;
//   len2 = version2Arr.length;
//   for (let i = 0; i < len1; i++) {
//     let item1 = version1Arr[i];
//     let item2 = version2Arr[i];
//     while (item1.length < item2.length) {
//       item1 += "0";
//     }
//     while (item1.length > item2.length) {
//       item2 += "0";
//     }
//     for (let i = 0; i < item1.length; i++) {
//       if (item1[i] === item2[i]) {
//         continue;
//       } else {
//         Number(item1[i]) > Number(item2[i]) ? (res = 0) : (res = 1);
//       }
//     }
//   }
//   return res;
//   // throw new Error('TODO: implement compareVersions');
// }
function compareVersions(version1, version2) {
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  const maxLen = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLen; i++) {
    const num1 = BigInt(arr1[i] || "0");
    const num2 = BigInt(arr2[i] || "0");

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}
compareVersions("1.01", "1.001");

function runTests() {
  assert.equal(compareVersions("1.0.10", "1.0.2"), 1);
  assert.equal(compareVersions("1.01", "1.001"), 0);
  assert.equal(compareVersions("1.0", "1.0.0"), 0);
  assert.equal(compareVersions("0.9.9", "1.0"), -1);
  assert.equal(
    compareVersions("9007199254740993.0", "9007199254740992.9"),
    1,
    "不能因 Number 精度丢失而判断错误",
  );
  assert.equal(compareVersions("000.0000", "0"), 0);

  console.log("✅ 04 compareVersions tests passed");
}

if (require.main === module) runTests();

module.exports = { compareVersions };
