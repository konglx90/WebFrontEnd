/*
在数学和计算机科学中，高阶函数是至少满足下列一个条件的函数：
    接受一个或多个函数作为输入
    输出一个函数
*/

// 实现一个reduce，接受一个reducer 函数

const reduce = (reducer, initial, arr) => {
  let acc = initial;
  for (let i = 0, length = arr.length; i < length; i++) {
    acc = reducer(acc, arr[i]);
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

const censor = words => filter(
  word => word.length !== 4,
  words
);

const startsWithS = words => filter(
 word => word.startsWith('s'),
 words
);

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
