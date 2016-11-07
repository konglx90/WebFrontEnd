/**
 * Created by kong90 on 16-5-18.
 */
/*
带名字的立即执行函数
 */

(someNamedFunction = function(msg) {
	console.log(msg || "Nothing for today !!")
	}) (); // 输出 --> Nothing for today !!​
​
someNamedFunction("Javascript rocks !!"); // 输出 --> Javascript rocks !!
someNamedFunction(); // 输出 --> Nothing for today !!​

