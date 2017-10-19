// We can use Object.freeze() to freeze a object
// freeze 使数据冻结

// Create an object that has two properties.
var obj = { pasta: "spaghetti", length: 10, mutable: {}};

// Freeze the object.
Object.freeze(obj);

// Now we can not change add delete properties for obj

obj.pasta = 'change';
// => { pasta: "spaghetti", length: 10 };

// 只在根部起作用
obj.mutable.change = 'change';
// => {pasta: "spaghetti", length: 10, mutable: {change: 'change'}}


// in setting.js file
// 这种配置我们不希望使用的人随意修改
const SITE_STATUS = {
  OPEN: 1,
  CLOSE: -1,
}

Object.freeze(SITE_STATUS)

SITE_STATUS.OPEN = 2;  // 没有用，哈哈
// 这样我们就无法修改SITE_STATUS了，可惜没有报错
