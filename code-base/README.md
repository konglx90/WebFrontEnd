## basic javascript code

### create request types when using vuex or redux

Create request types when using vuex or redux.

```js
const createReqTypes = (name) => {
    return {
        'REQUEST': name + '_REQUEST',
        'SUCCESS': name + '_SUCCESS',
        'FAILURE': name + '_FAILURE'
    }
};

```

<details>
<summary>Examples</summary>

```js
const FETCH_ACTIVITY = createReqTypes('FETCH_ACTIVITY');
```

</details>

### isMobile

Judge a device is Mobile by userAgent.

```js
const isMobile = () => {
    return /Android|iPad|iPhone|iPod/ig.test(window.navigator.userAgent)
};

```

### item in array

Judge item is in a array by indexOf.

```js
// when item is a basic type, like Number null undefined String
const itemInArray = (item, array) => {
    return array.indexOf(item) >= 0
};

```

<details>
<summary>Examples</summary>

```js
const isExist = itemInArray(9, [1, 2, 3]); // => false
```

</details>

### get with default

Get item from a object with default value when get a falsy value.

```js
const getWithDefault = (obj, key, defaultVal) => {
    return obj[key] || defaultVal;
}

// get with default value in a safe way
// consider return falsy value, also return null or 0
const getWithDefaultSafe = (obj, key, defaultVal) => {
    if (obj[key] === undefined) {
        return defaultVal;
    }
    return obj[key];
}
```
