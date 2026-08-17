'use strict'; // Day 1 / Exercise 02

const assert = require('node:assert/strict');

/**
 * 手写解析完整 URL 或查询字符串。
 * 禁止使用 URL、URLSearchParams 和第三方库。
 * @param {string} input
 * @returns {Record<string, string | string[]>}
 */
function parseQuery(input) {
  // TODO: 在这里写你的实现
  throw new Error('TODO: implement parseQuery');
}

function runTests() {
  assert.deepStrictEqual(
    parseQuery(
      'https://example.com/search?name=%E5%BC%A0%E4%B8%89&tag=js&tag=ts&empty=&keyword=hello+world#result',
    ),
    {
      name: '张三',
      tag: ['js', 'ts'],
      empty: '',
      keyword: 'hello world',
    },
  );

  assert.deepStrictEqual(parseQuery('?flag&x=1%3D2'), {
    flag: '',
    x: '1=2',
  });
  assert.deepStrictEqual(parseQuery('a=1&a=2&a=3'), {
    a: ['1', '2', '3'],
  });
  assert.deepStrictEqual(parseQuery('https://example.com/path#only-fragment'), {});
  assert.deepStrictEqual(parseQuery(''), {});

  console.log('✅ 02 parseQuery tests passed');
}

if (require.main === module) runTests();

module.exports = { parseQuery };
