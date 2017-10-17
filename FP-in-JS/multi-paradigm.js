/*
命令式编程(Imperative programming)、
函数式编程(Functional programming)、
面向对象编程(Object-oriented programming)
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
