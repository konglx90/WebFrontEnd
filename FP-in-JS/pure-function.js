// use pure function
// 纯函数的定义是，对于相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。

// stateless 不使用(依赖)外部的状态
// pure function compose 还是 pure function，便于复用代码
// pure function 由于值只与输入有关，所以结果可以被缓存

// 不纯的
var minimum = 21;
// 取决于外部状态
var checkAge = function(age) {
  return age >= minimum;
};
// 纯的
var checkAge = function(age) {
  var minimum = 21;
  return age >= minimum;
};

// 可以近似认为是纯的，如果你不改变immutableState的话
var immutableState = Object.freeze({
  minimum: 21
});// 取决于外部状态
var checkAge = function(age) {
  return age >= minimum;
};

// 保持 pure 的优点
// 1. 可缓存
var memoize = function(f) {
  var cache = {};
  return function() {
    var arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
    return cache[arg_str];
  };
};
var squareNumber = memoize(function(x){ return x*x; });

squareNumber(4); //=> 16
squareNumber(4); // 从缓存中读取输入值为 4 的结果

// 2. 可移植性
// 纯函数对于其依赖必须要诚实，这样我们就能知道它的目的。
// 在 JavaScript 的设定中，可移植性可以意味着把函数序列化（serializing）并通过
// socket 发送。也可以意味着代码能够在 web workers 中运行。总之，可移植性是一
// 个非常强大的特性。

// 3.Testable
// 因为依赖明确
