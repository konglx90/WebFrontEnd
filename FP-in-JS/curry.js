var curry = require('lodash/curry');

// 精简的递归自动柯里化
// 柯里化：输出一个函数
// 返回另一个函数的高阶函数被称为Curry化的函数
// const curry = (
//   f, arr = []
// ) => (...args) => (
//   a => a.length === f.length ?
//     f(...a) :
//     curry(f, a)
// )([...arr, ...args]);

const add = curry((a, b) => a + b);

add10 = add(10);
add20 = add(20)

add10(1);   // 11
add20(1);   // 21

var match = curry(function(what, str) {
  return str.match(what);
});
var replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});
var filter = curry(function(f, ary) {
  return ary.filter(f);
});
var map = curry(function(f, ary) {
  return ary.map(f);
});
// “预加载”函数的能力，通过传递一到两个参数调用函数，就能得
// 到一个记住了这些参数的新函数
