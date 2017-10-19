var curry = require('lodash/curry');
/*
在数学和计算机科学中，高阶函数是至少满足下列一个条件的函数：
    接受一个或多个函数作为输入
    输出一个函数
*/

// 实现一个reduce，接受一个 reducer 函数

const reduce = (reducer, initial, arr) => {
  let acc = initial;
  for (let i = 0, length = arr.length; i < length; i++) {
    // acc = reducer(acc, arr[i]);
    acc = reducer(acc, arr[i], i);  // have index
  }
  return acc;
};

const reduceRight = (reducer, initial, arr) => {
  let acc = initial;
  for (let i = 0, length = arr.length; i < length; i++) {
    // acc = reducer(acc, arr[i]);
    acc = reducer(acc, arr[arr.length - 1 - i], i);  // have index
  }
  return acc;
};

reduce((acc, curr) => acc + curr, 0, [1,2,3]); // 6

// 实现 fliter

const filter = (
 fn, arr
) => reduce((acc, curr) => fn(curr) ?
 acc.concat([curr]) :
 acc, [], arr
);

// 实现 map

const map = (
  fn, arr
) => reduce((acc, curr) => acc.concat(fn(curr)), [], arr);


// “遍历”和“过滤” 是常见的需求，可以通过高阶函数抽象出来，于是就有了map fliter 等

// const censor = words => filter(
//   word => word.length !== 4,
//   words
// );
//
// const startsWithS = words => filter(
//  word => word.startsWith('s'),
//  words
// );

const censor = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }
  return filtered;
};

censor(['oops', 'gasp', 'shout', 'sun']);
// [ 'shout', 'sun' ]

const startsWithS = words => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.startsWith('s')) filtered.push(word);
  }
  return filtered;
};

startsWithS(['oops', 'gasp', 'shout', 'sun']);
// [ 'shout', 'sun' ]

// reduce 几乎所有对数组的操作都可以使用reduce来解决
// 我们需要做的是定义好每一个函数(表达我们的用意)

// reverse
reduce((acc, x) => [x].concat(acc), [], [1, 2, 3, 4]);

// if we want it to a function
var reverse = (list) => reduce((acc, x) => [x].concat(acc), [], list);
console.log(reverse([1, 2, 4, 5]), 'reverse');

var ratings = [2,3,1,4,5];
// 求最大
reduce((acc, curr) => acc > curr ? acc : curr, -Infinity, ratings);

// 求最小
reduce((acc, curr) => acc < curr ? acc : curr, Infinity, ratings);

// 元素count
lst = [1, 1, 2, 3, 2, 3, 3, 5, 6, 7, 7, 6, 5, 5, 5];
reduce((acc, curr) => {
    curr in acc ? acc[curr] += 1 : acc[curr] = 1
    return acc;
}, {}, lst);

// 千分位
const str = '1123123';
reduce((acc, curr, index) => {
	return ((index % 3) || index === 0 ? curr : (curr + ',')) + acc
}, '', str.split('').reverse());
// => 1,123,123

// 千分位::去掉reverse
reduceRight((acc, curr, index) => {
	return ((index % 3) || index === 0 ? curr : (curr + ',')) + acc
}, '', str.split(''));
// 1,123,123

// Redux Reducer

// export default function createStore(reducer, preloadedState, enhancer) {
//
// }
const list = (state = [], action) => {
    switch (action.type) {
    case 'kzstore.site-list.fetchList':
        return action.data;
    default:
        return state;
    }
};
