/*
命令式编程(Imperative programming)、
函数式编程 声明式(Functional programming)、
面向对象编程(Object-oriented programming)
命令式的循环要求你必须先实例化一个数组，而且执行完这个实例化语句之后，解
释器才继续执行后面的代码。然后再直接迭代 cars 列表，手动增加计数器，把
各种零零散散的东西都展示出来...实在是直白得有些露骨。
使用 map 的版本是一个表达式，它对执行顺序没有要求。而且， map 函数如何
进行迭代，返回的数组如何收集，都有很大的自由度。它指明的是 做什么 ，不
是 怎么做 。因此，它是正儿八经的声明式代码。
*/

const a = [1, 2, 3, 4, 5];

// Imperative
const b = [];
for (var i=0; i<a.length; i++) {
  b.push(a[i] * 2);
}

// Functional
const b = a.map(e => e * 2);

// Object-oriented
// 这个例子无法表示面向对象的特性及优点
// 关于封装,继承,多态等
class A {
  constructor(a) {
    this.a = a;
  }
  double() {
    return this.a.map(e => e * 2);
  }
}



// more Lizi

// 命令式
var makes = [];
for (i = 0; i < cars.length; i++) {
  makes.push(cars[i].make);
}
// 声明式
var makes = cars.map(function(car){ return car.make; });

// 命令式
var authenticate = function(form) {
  var user = toUser(form);
  return logIn(user);
};
// 声明式
var authenticate = compose(logIn, toUser);
