// [].concat(1, 2) 与 [].concat([1, 2]) 和 [].concat(1)
// concat天生可以接受多个参数和当个参数
//
function printUpperCase(words) {
	var elements = [].concat(words || [])
	for (var i in elements){
		console.log(elements[i].toUpperCase())
	}
}

printUpperCase("kjs")
