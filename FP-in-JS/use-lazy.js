// lazy.js https://zhuanlan.zhihu.com/p/24138694

var Lazy = require('lazy.js');

// 现在我们打算取每个数字的平方，增加一下，最后取出前5个偶数。为了保持代码简短，我们使用这些辅助函数

const array = Lazy.range(1000).toArray();
const square = x => {
  console.log('square-1');
  return x * x;
}
const inc = x => x + 1;
const isEven = x => x % 2 === 0;
// Lazy()返回一个封装的对象. 在封装的对象上调用方法会返回封装的对象本身, 直到 value 方法调用为止.
const result = Lazy(array).map(square).map(inc).filter(isEven).take(5).value();

// Imperative
var results = [];
for (var i = 0; i < array.length; ++i) {
  var value = (array[i] * array[i]) + 1;
  console.log('square-2');
  if (value % 2 === 0) {
    results.push(value);
    if (results.length === 5) {
      break;
    }
  }
}


// Lazy evaluation
// 对于一个表达式，在不需要值的时候不计算，需要的时候才计算
x = 0 || console.log('x')    // print 'x'
x = 1 || console.log('x')    // 1
