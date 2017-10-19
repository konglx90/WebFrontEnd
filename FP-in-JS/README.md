# Functional Programming in Javascript

```
Features
- Function is first Class
- Pure function
- Immutable
- Less state and var
- No side effect
- Higher-order function
- Currying
- Closure
- Compose
- Anonymous function
- Pointfree
...
```

## P-1

今天我要分享的主题是 Functional Programming in Javascript.

## P-2 多范式

Javascript 是一门多范式的语言. 你可以在Js里写出传统的命令式的代码，像C语言一样， 也可以写面向对象的代码
当然也可以写函数式(声明式)的代码。因为JS是一门披着Java外衣的Scheme Self. [为什么?](https://en.wikipedia.org/wiki/JavaScript)

> JavaScript was influenced by programming languages such as Self and Scheme

Java是当时乃至现在最为流行的语言，这样可以吸引一部分Java程序员来写Js，便于推广, 而Scheme和self 都是函数式语言Lisp
的方言, 是JS作者偏爱的语言.所以说JS是比较适合写函数式的代码. 我们可以直观地感受一下. [multi-paradigm](./multi-paradigm.js)

这是一个非常简单的需求，将数组里的元素加倍，我们先看命令式的代码.
命令式的代码往往需要你指定执行的每一步

1. 新建一个数组
2. 然后开始迭代一个数组，手动增加计数器
3. 然后把数据一个一个塞到新的数组里去

而同样的代码用函数式来表达就简单多了，map 抽象了遍历的过程，它只需要你传给它一个处理元素的函数就够了.
使用map reduce every some filter，forEach等可以替代掉绝大多数 for 循环的工作, 我推荐使用这些方法
代替 for 循环

1. 这些函数(方法)的应用场景很广，这是可行性
2. 这些函数(方法)从字面看上去是有语义的，比如 map 是遍历一个数组产生一个新的数组，
some every 适合去做断言，filter 过滤数组中的元素返回一个数组(重要)
3. reduce 是一个很强大的工具，以上所有的方法都可以用reduce实现，待会再详细讲
3. forEach 遍历数组做一些事，不用你自己去管理 i++

声明：不是说for 循环不好，其实恰恰相反，for 循环是功能强大的存在，但是做工程需要的不仅仅是功能上的实现，
还包括代码的可读性性和可维护性，选择具有语义的的函数是更好的选择。

## P-3 Features of Functional Programming in Js

到底什么是函数式编程? 其实我也不太清楚，这里我只介绍一些和函数式有关的特性，在使用上不会有太多的侵入性.
我们只需在原来使用JS的基础上记住一些简单的规则就够了.

> 提醒一句，一些未曾用过的扩展点不仅浪费精力，而且可能妨碍你的工作。

这些特性都是平常写代码经常会用到的

### [Function is first Class](https://en.wikipedia.org/wiki/First-class_function)

函数是"一等公民",完整的解释如下

> This means the language supports passing functions as arguments to other functions, returning them as the values from other functions, and assigning them to variables or storing them in data structures

JS 把函数和其他的数据类型一样看待，你可以把function当成参数传给另外一个function，可以返回function，可以赋值给其他变量，或者在
其他的数据结构里存储function. 这个特性在JS代码里还是很常见的，回调，闭包都是.

### [Pure function](https://en.wikipedia.org/wiki/Pure_function)

>   The function always evaluates the same result value given the same argument value(s). The function result value cannot depend on any hidden information or state that may change while program execution proceeds or between different executions of the program, nor can it depend on any external input from I/O devices (usually—see below).
    Evaluation of the result does not cause any semantically observable side effect or output, such as mutation of mutable objects or output to I/O devices (usually—see below).

从定义上来说，纯函数必须要能够根据相同的输入返回相同的输出；如果函数需要跟外部事物打交道，那么就无法保证这一点了，不
依赖外部的状态，不产生诸如IO操作等副作用对纯函数也是很重要的.

[code](./pure_function.js)

### Immutable

Immutable 是指不可变量, 数据从一开始创建就不可改变. 大家应该都写过类似深拷贝浅拷贝这样的函数吧。为什么要写深拷贝呢，
因为我们担心数据不知道在某个时刻以我们不希望的形式改变了，这样我们使用该变量就会变得非常危险。但是如果是Immutable的数据
就不会有这样的担心了.

JS 里提供一些简单的函数使数据不可变 Object.freeze 就是干这个的.[code](./immutable.js)
这个话题还是很大的，有兴趣的同学可以去研究一下immutable.js.

### Less state and var, Compose

函数式编程推崇的是通过组合不同的函数减少不必要的状态和变量, 数据在函数间流动而不需要现身.

### No Side effect

Js 里常见的副作用有

- 更改文件系统
- 往数据库插入记录
- 发送一个 http 请求
- 可变数据
- 打印/log
- 获取用户输入
- DOM 查询
- 访问系统状态

[部分数组操作](./array.js)

### higher-order-function reduce

两者满足一个就是高阶函数
1. 接受一个或多个函数作为输入
2. 输出一个函数

[使用高阶函数实现reduce...](./high-order.js)

### curry

[code](./curry.js)

### compose

[code](./compose.js)
[compose 的应用](./flickr.js)

### [plugin](./plugin.js)

## More
