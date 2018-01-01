/**
 * Created by kong90 on 16-5-20.
 */
/*
用一行生成[0, 1, ..., N-1]的序列
简要说明

    Array.apply(null, {length: N}) 返回一个由undefined填充的长度为N的数组(例如 A = [undefined, undefined, ...])。
    A.map(Function.call, Number) 返回一个长度为N的数组，它的索引为I的元素为Function.call.call(Number, undefined, I, A)的结果。
    Function.call.call(Number, undefined, I, A)可转化为Number(I)，正好就是I。
    结果为：[0, 1, ..., N-1]。

 */



var N = 100;
arr = Array.apply(null, {length: N}).map(Function.call, Number)
console.log(arr)