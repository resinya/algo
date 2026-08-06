function deepClone(obj, map = new WeakMap()) {
  if (typeof obj !== "object" || obj === null) return obj;
  const target = Array.isArray(obj) ? [] : {};
  map.set(obj, target);
  for (const key of Object.keys(obj)) {
    target[key] = deepClone(obj[key], map);
  }
  return target;
}
