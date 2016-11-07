// 这是一些检查某对象是否有某属性的方法。
//
//use "strict"
var o = {
	name: "klx"
}

console.log(o.hasOwnProperty('name'))
console.log("name" in o)

console.log(o.hasOwnProperty("valueOf"))
console.log("valueOf" in o)


/*
 *
 *
 	 var myObject = {
   name: '@tips_js'
	 };

	 myObject.hasOwnProperty('name'); // true
	 'name' in myObject; // true


	 myObject.hasOwnProperty('valueOf'); // false, valueOf 继承自原型链
	 'valueOf' in myObject; // true
*/

