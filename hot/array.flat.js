//deep 控制展开层数
Array.prototype._flat = function (deep = 1) {
  let res = [];
  deep--;
  for (const p of this) {
    if (Array.isArray(p) && deep >= 0) {
      res = res.concat(p._flat(deep));
    } else res.push(p);
  }
  return res;
};
const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
console.log(arr._flat(2));
