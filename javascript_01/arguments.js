/**
 * Created by kong90 on 16-5-20.
 */
/*
背景

在JavaScript的方法里，arguments参数可以让你访问传递给该方法的所有参数。
arguments是一个类数组对象；arguments可是使用数组标记访问，而且它有length参数，
但是它没有filter、map和forEach这样内建到数组内的方法。
因此，如下代码是一个非常常见的将arguments转换为数组的办法：
 */

function foo(){
    var args = Array.prototype.slice.call(arguments);
    for(var i in args){
        console.log(i);
    }
    for(var i in arguments){
        console.log(i);
    }
    args.map(function(i){
        console.log(i)
    })
    arguments.map(function(i){
        console.log(i)
    })
}

foo(12, 45, "kkl", [12, 14])