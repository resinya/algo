'use strict'; // Day 1 / Exercise 04

const assert = require('node:assert/strict');

/**
 * 比较仅包含数字和点号的版本号。
 * @param {string} version1
 * @param {string} version2
 * @returns {-1 | 0 | 1}
 */
function compareVersions(version1, version2) {
  // TODO: 在这里写你的实现
  throw new Error('TODO: implement compareVersions');
}

function runTests() {
  assert.equal(compareVersions('1.0.10', '1.0.2'), 1);
  assert.equal(compareVersions('1.01', '1.001'), 0);
  assert.equal(compareVersions('1.0', '1.0.0'), 0);
  assert.equal(compareVersions('0.9.9', '1.0'), -1);
  assert.equal(
    compareVersions('9007199254740993.0', '9007199254740992.9'),
    1,
    '不能因 Number 精度丢失而判断错误',
  );
  assert.equal(compareVersions('000.0000', '0'), 0);

  console.log('✅ 04 compareVersions tests passed');
}

if (require.main === module) runTests();

module.exports = { compareVersions };
