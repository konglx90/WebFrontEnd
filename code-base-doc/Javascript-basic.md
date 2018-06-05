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

### Hash maps without side effects

```js
const map = Object.create(null);
```

<details>
<summary>Examples</summary>


```js
const dirtyMap = {};
const cleanMap = Object.create(null);

dirtyMap.constructor    // function Object() { [native code] }

cleanMap.constructor    // undefined

// Iterating maps

const key;
for(key in dirtyMap){
  if (dirtyMap.hasOwnProperty(key)) {   // Check to avoid iterating over inherited properties.
    console.log(key + " -> " + dirtyMap[key]);
  }
}

for(key in cleanMap){
  console.log(key + " -> " + cleanMap[key]);    // No need to add extra checks, as the object will always be clean
}
```

</details>