## Basic javascript code

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

<details>
<summary>Examples</summary>

```js
getWithDefault({
    a: 'a',
    b: null,
}, b, 'defaultVal'); // => defaultVal

// demo 2
getWithDefaultSafe({
    a: 'a',
    b: 0,
}, b, 'defaultVal'); // => 0
```

</details>

### todayShiftDays

Use a easy way to shift to other days from a special day(like today).

```js
const todayShiftDays = (amount=0, date=new Date()) => {
    const [
      tzOff,
      d
    ] = [
      date.getTimezoneOffset() * 60 * 1000,
      new Date()
    ];

    let [t, tzOff2] = [
      date.getTime()
    ]

    t += (1000 * 60 * 60 * 24) * amount;
    d.setTime(t);

    tzOff2 = d.getTimezoneOffset() * 60 * 1000;
    if (tzOff != tzOff2) {
      let diff = tzOff2 - tzOff;
      t += diff;
      d.setTime(t);
    }

    return d
}

```

<details>
<summary>Examples</summary>

```js
const today = todayShiftDays();
const tomorrow = todayShiftDays(amount=1);
const yesterday = todayShiftDays(amount=-1);

const today = todayShiftDays(amount=-1, tomorrow);
```

</details>

### format time

format time to 'YYYY-MM-DD' or other format you define.

```js
const formatTime = (time, format='YYYY-MM-DD') => {
    const toTwo = (num) => {
        return ('00' + String(num)).slice(-2);
    }
    const year = time.getFullYear();
    const month = toTwo(time.getMonth() + 1);
    const day = toTwo(time.getDate());
    const hour = toTwo(time.getHours());
    const min = toTwo(time.getMinutes());
    const sec = toTwo(time.getSeconds());
    return format.replace('YYYY', year)
        .replace('MM', month)
        .replace('DD', day)
        .replace('HH', hour)
        .replace('mm', min)
        .replace('ss', sec);
}

```

<details>
<summary>Examples</summary>

```js
let time = formatTime(new Date()) // => 2018-01-01
time = formatTime(new Date(), 'YYYY'); // => 2018

const template = 'YYYY年，北京雾霾.'
time = formatTime(new Date(), template); // 2018年，北京雾霾.
```

</details>


### time

```js
/**
* 格式化输出一个dateTime到now的时间差
* @param {Number} timestamp 时间戳
* @return {String} 一个格式化的时间 xx天 xx:xx:xx
*/
const dateTimeFromNow = (timestamp) => {

    const toTwo = (num) => {
        return ('00' + String(num)).slice(-2);
    }

    const nowTimestamp = new Date().getTime();

    const interval = Math.abs(timestamp - nowTimestamp);
    const intervalDay = interval / 1000 / 3600 / 24;

    let intervalHour = intervalDay % 1 * 24;
    let intervalMin = intervalHour % 1 * 60;
    let intervalSec = intervalMin % 1 * 60;

    return `${toTwo(parseInt(intervalDay))}天 \
               ${toTwo(parseInt(intervalHour))}: \
               ${toTwo(parseInt(intervalMin))}: \
               ${toTwo(parseInt(intervalSec))}`;
}

```

<details>
<summary>Examples</summary>

```js
const beforeTimestamp = 1514818108448;
dateTimeFromNow(beforeTimestamp);  // => 00天 00:01:20
```

</details>
