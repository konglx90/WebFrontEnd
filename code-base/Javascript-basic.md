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
