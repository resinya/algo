var isValid = function (s) {
  const stack = [];
  if (s.length % 2) return false;
  for (let ch of s) {
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch); // 入栈
    } else {
      const top = stack.pop(); // 出栈
      if (!top) return false;
      if (top === "(" && ch !== ")") return false;
      if (top === "[" && ch !== "]") return false;
      if (top === "{" && ch !== "}") return false;
    }
  }
  return stack.length === 0;
};
