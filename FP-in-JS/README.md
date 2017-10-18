# Functional Programming in Javascript

## P-1

今天我要分享的主题是 Functional Programming in Javascript.

## P-2 多范式

Javascript 是一门多范式的语言. 你可以在Js里写出传统的命令式的代码，像C语言一样， 也可以写面向对象的代码
当然也可以写函数式(声明式)的代码。因为JS是一门披着Java外衣的Scheme Self. 为什么?[wiki](https://en.wikipedia.org/wiki/JavaScript)

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
