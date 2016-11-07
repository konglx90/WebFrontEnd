/**
 * Created by kong90 on 16-5-18.
 */
/*
清空数组的两种方法
 */

var foo = [1,2,3];
var bar = [1,2,3];
var foo2 = foo;
var bar2 = bar;
foo = [];
bar.length = 0;
console.log(foo, bar, foo2, bar2);
