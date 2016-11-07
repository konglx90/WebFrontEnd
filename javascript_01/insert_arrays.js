// 向数组中插入数据

var arr = [1, 2, 3, 4, 5]
var arr2 = []

// 向后面添加 方法1
arr.push(6)
// 方法2
arr[arr.length] = 7
// 方法3
arr2 = arr.concat([8])

console.log(arr2)

// 向前面加入数据
arr2.unshift(0)
[-1].concat(arr2)  // 而且效率比unshift略高
console.log(arr2)

