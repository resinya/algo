"use strict"; // Day 1 / Exercise 02

const assert = require("node:assert/strict");

/**
 * 手写解析完整 URL 或查询字符串。
 * 禁止使用 URL、URLSearchParams 和第三方库。
 * 中文解释（已给出）：取出 ? 后、# 前的查询部分，把 key=value 转成对象，并处理解码、空值和重复键。
 * 输入：完整 URL 或查询字符串，例如 "?tag=js&tag=ts&keyword=hello+world"。
 * 输出：普通对象；重复键对应字符串数组，+ 还原为空格，百分号编码需要解码。
 * 具体例子："?tag=js&tag=ts&empty=" -> { tag: ["js", "ts"], empty: "" }。
 * 关键边界：没有查询参数返回 {}；没有 = 的键按空字符串处理。
 * @param {string} input
 * @returns {Record<string, string | string[]>}
 */
function parseQuery(input) {
  // TODO: 在这里写你的实现
  const res = {};
  let query = input;
  //url先判断是否有参数
  const questionIndex = query.indexOf("?");
  if (questionIndex !== -1) {
    query = query.slice(questionIndex + 1);
  } else if (query.includes("://")) {
    // 是完整 URL，但没有查询参数
    return res;
  }
  query = query.split("#")[0];
  if (!query) return res;
  const pairs = query.split("&");
  // console.log(pairs);
  for (const pair of pairs) {
    const [rawKey, rawValue = ""] = pair.split("=");
    const key = decode(rawKey);
    const value = decode(rawValue);
    console.log({
      rawKey,
      rawValue,
    });
    // res[key] ? (res[key] = [...res.key, value]) : (res[key] = value);
    if (!Object.hasOwn(res, key)) {
      res[key] = value;
    } else if (Array.isArray(res[key])) {
      res[key].push(value);
    } else {
      res[key] = [res[key], value];
    }
  }
  function decode(part) {
    const normalized = part.replaceAll("+", " ");
    return decodeURIComponent(normalized);
  }
  return res;

  // throw new Error('TODO: implement parseQuery');
}
// parseQuery(
//   "https://example.com/search?name=%E5%BC%A0%E4%B8%89&tag=js&tag=ts&empty=&keyword=hello+world#result",
// );
function runTests() {
  assert.deepStrictEqual(
    parseQuery(
      "https://example.com/search?name=%E5%BC%A0%E4%B8%89&tag=js&tag=ts&empty=&keyword=hello+world#result",
    ),
    {
      name: "张三",
      tag: ["js", "ts"],
      empty: "",
      keyword: "hello world",
    },
  );

  assert.deepStrictEqual(parseQuery("?flag&x=1%3D2"), {
    flag: "",
    x: "1=2",
  });
  assert.deepStrictEqual(parseQuery("a=1&a=2&a=3"), {
    a: ["1", "2", "3"],
  });
  assert.deepStrictEqual(
    parseQuery("https://example.com/path#only-fragment"),
    {},
  );
  assert.deepStrictEqual(parseQuery(""), {});

  console.log("✅ 02 parseQuery tests passed");
}

if (require.main === module) runTests();

module.exports = { parseQuery };
