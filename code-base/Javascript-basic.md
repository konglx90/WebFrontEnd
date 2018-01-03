## Javascript basic

### isObject

```js
const isObject = (value) => {
    var type = typeof value
    return value !== null && (type === 'object' || type === 'function')
}

```

### isNotEmptyObject

```js
const isEmptyObject = (o) => {
    let t
    for (t in o) {
        return !1
    }
    return !0
}

```

### isFunction

```js
const isFunction = (fn) => {
    return Object.prototype.toString.call(fn) === '[object Function]'
}

```

### removeDuplicatedItem

```js
// 数组去重
const removeDuplicatedItem = (arr) => {
    var ret = [];
    for (var i = 0, j = arr.length; i < j; i++) {
        if (ret.indexOf(arr[i]) === -1) {
            ret.push(arr[i]);
        }
    }
    return ret;
}

```

### removeItem

```js
// 删除数组中的某个元素
const removeItem = (arr, item) => {
    return arr.filter(x => x !== item)
}

```

### includes

```js
const includes = (arr, value) => arr.indexOf(value) > -1;

```
