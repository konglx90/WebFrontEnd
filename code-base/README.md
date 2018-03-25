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

    return [
        `${toTwo(parseInt(intervalDay))}天 `,
        `${toTwo(parseInt(intervalHour))}:`,
        `${toTwo(parseInt(intervalMin))}:`,
        `${toTwo(parseInt(intervalSec))}`
    ].join('');
}

```

<details>
<summary>Examples</summary>

```js
const beforeTimestamp = 1514818108448;
dateTimeFromNow(beforeTimestamp);  // => 00天 00:01:20
```

</details>

### cut off string

Cut off string with a aim length(default 24),
if character's charCode > 128: will count be 2.

```js
/**
* cut off string
* @param {String} str str will be cut
* @param {String} aimLength
* @param {String} suffi
* @return {String}
*/
const cutOffString = (str='', aimLength=24, suffix='...') => {
    let realLength = 0,
        len = str.length,
        needLength = 0,
        needStr = '',
        charCode = -1;

    for (let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) {
            realLength += 1;
        } else {
            realLength += 2;
        }
        needLength = i;
        if (realLength > aimLength) break;
    }
    needStr = realLength <= aimLength ? str : str.slice(0, needLength) + suffix;
    return needStr;
}

```

<details>
<summary>Examples</summary>

```js
const str = '某些场景下，比如响应鼠标移动或者窗口大小调整的事件。';
cutOffString(str);  // => 某些场景下，比如响应鼠标...
```

</details>

### debounce

想象每天上班大厦底下的电梯。把电梯完成一次运送，类比为一次函数的执行和响应。假设电梯有两种运行策略 throttle 和 debounce ，超时设定为15秒，不考虑容量限制。

throttle 策略的电梯。保证如果电梯第一个人进来后，15秒后准时运送一次，不等待。如果没有人，则待机。

debounce 策略的电梯。如果电梯里有人进来，等待15秒。如果又人进来，15秒等待重新计时，直到15秒超时，开始运送。

[wiki](https://blog.coding.net/blog/the-difference-between-throttle-and-debounce-in-underscorejs)

```js
const debounce = (func, wait, immediate) => {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

```

<details>
<summary>Examples</summary>

```js
$('div').click(() => { console.log(new Date().getSeconds()); });
$('div').click(debounce(() => { console.log(new Date().getSeconds()); }, 2000))
```

</details>

### get value from href query

```js
/**
* 解析url参数
* @param {String} name 参数名
* @return {String} 值
*/
const getQueryString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = window.location.search.substr(1).match(reg)
    if (r != null) return window.decodeURI(r[2])

    return undefined;
}

```

<details>
<summary>Examples</summary>

```js
// open Link https://www.kuaizhan.com/kzweb/v1/page-edit?page_id=6764368808
getQueryString('page_id') // => 6764368808
```

</details>

### add query for url

Add queries for url brushless.

```js
/**
* 为url无刷新添加query
* @param {String} name 参数名
* @param {String} {Number} value 参数名
* @return {String} newUrl 新的url
*/
const addQueryForUrl = (name, value) => {
    const oldUrl = window.location.href
    const newUrl = funcUrl(name, value)

    if (oldUrl !== newUrl) {
        window.history.pushState({}, 0, newUrl)
    }
    return newUrl
}

/**
* funcUrl()获取完整search值(不包含问号)
* funcUrl(name,value) 将search中name的值设置为value,并返回完整url
* 返回内容如 http://www.a.com/list/2.html?page=2&color=4&size=3#pi
*/
const funcUrl = (name, value) => {
    var loca = window.location;
    var baseUrl = loca.origin + loca.pathname + "?";
    var query = loca.search.substr(1);
    var hash = loca.hash;
    if (name === undefined || value === undefined) { return baseUrl + hash };
    var url;
    if (query === "") {
        // 如果没有 search 值,则返回追加了参数的 url
        url = baseUrl + name + "=" + value + hash;
    } else {
        // 如果有 search 值,则在其中修改对应的值,并且去重,最后返回 url
        var obj = {};
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        };
        obj[name] = value;
        url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&") + hash;
    }
    return url;
}

```

<details>
<summary>Examples</summary>

```js
// open Link https://www.kuaizhan.com
addQueryForUrl('key', 'value') // => http://www.kuaizhan.com/?key=value and change location.href
addQueryForUrl('key', 'value') // => http://www.kuaizhan.com/?key=value no change
addQueryForUrl('key1', 'value1') // => http://www.kuaizhan.com/?xx=value&key=value&key1=value1
```

</details>

### cache by local Storage

Cache by localStorage sessionStorage


[localStorage wiki](http://www.epubit.com.cn/book/onlinechapter/38198)
> 我又进行了另一个基准测试（http://jsperf.com/localstorage-string-size-retrieval）来检验我的新结论，最好尽可能地减少读取数据的次数。和此前的基准测试结果类似，在大多数浏览器中，读取100个字符10次比一次读取10 000字符慢90%左右.

> 鉴于此，从localStorage读取数据的最佳策略是使用尽可能少的键值，存储尽可能多的数据。因为读取10个字符和读取2000个字符所需时间大致是相同的，所以你应该尝试把尽可能多的数据保存为一个键值对应的值。每次调用getItem()（或从localStorage读取属性）都会增加时耗，所以一定要确保每次访问读取数据最大化。对于任何一个变量或对象属性，你越快将它读取到内存，后续的所有操作也会越快.

```js
const generateCacheApi = (engine, key, defaultExpire = 7 * 24 * 3600 * 1000) => {
    return {
        set: (data, expire = defaultExpire) => {
            const _data = {
                data,
                expire,
                time: new Date().getTime(),
            };
            return engine.setItem(key, JSON.stringify(_data));
        },
        get: () => {
            const res = engine.getItem(key);
            if (!res) {
                return null;
            }
            let { data, time, expire} = JSON.parse(res);
            const now = new Date().getTime();
            if (now - time > expire) {
                return null;
            }
            return data;
        }
    }
}

```

<details>
<summary>Examples</summary>

```js
const storage = generateCacheApi(window.localStorage, 'key');
storage.set({a: 'a', b: 'b'});
storage.get(); // => {a: 'a', b: 'b'}
```

</details>

### timeoutify

```js
const timeoutify = (fn,delay) => {
	var intv = setTimeout(() => {
			intv = null;
			fn( new Error( "Timeout!" ) );
		}, delay )
	;

	return () => {
		// timeout hasn't happened yet?
		if (intv) {
			clearTimeout( intv );
			fn.apply( this, [ null ].concat( [].slice.call( arguments ) ) );
		}
	};
}

```

### asyncify

```js
function asyncify(fn) {
	var orig_fn = fn,
		intv = setTimeout( function(){
			intv = null;
			if (fn) fn();
		}, 0 )
	;

	fn = null;

	return function() {
		// firing too quickly, before `intv` timer has fired to
		// indicate async turn has passed?
		if (intv) {
			fn = orig_fn.bind.apply(
				orig_fn,
				// add the wrapper's `this` to the `bind(..)`
				// call parameters, as well as currying any
				// passed in parameters
				[this].concat( [].slice.call( arguments ) )
			);
		}
		// already async
		else {
			// invoke original function
			orig_fn.apply( this, arguments );
		}
	};
}

```

<details>
<summary>Examples</summary>

```js
function result(data) {
	console.log( a );
}

var a = 0;

// we don't known ajax are async?
ajax( "..pre-cached-url..", asyncify( result ) );
a++;
```

</details>

### Error Handling

```js
function foo() {
	setTimeout( function(){
		baz.bar();
	}, 100 );
}

try {
	foo();
	// later throws global error from `baz.bar()`
}
catch (err) {
	// never gets here
}
```

### Single Value to more in Promise

[wiki](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20%26%20performance/ch3.md#single-value)

```js
// 还蛮有趣的

```


### functional router nav in react router

```js

const end = (str) => str[str.length-1];

const withHistory = (urlPrefix = '/', history) => {
    if (!history.push) throw new Error('need react router history');
    if (end(str) !== '/')  throw new Error('urlPrefix need end by /');

    return (wrappedFunc) => {
        return (...arg) => {
            const locationSearch = window.location.search;
            const url = `${urlPrefix}${wrappedFunc(...arg)}/${locationSearch}`
            history.push(url);
            // sendPV();
            // something else
        };
    };
};

// use
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';

const URL_PREFIX = '/bj/nangua/';

// define path
const createCommentInputPath = rentUnitId => `comment/${rentUnitId}/input`;

class CommentCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleClick = () => {
        this.goCommentInput('9090909090');
    }

    // About router
    withHistory = withHistory(URL_PREFIX, this.props.history)
    goCommentInput = this.withHistory(createCommentInputPath);

    render() {
        return (
            <div onClick={this.handleClick}>comment</div>
        );
    }
}
export default withRouter(CommentCard);


```
