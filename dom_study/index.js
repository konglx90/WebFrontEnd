//

function A(params) {
	params = params || {};
	for (var key in params) {
		this[key] = function(x){
			return function(){
				return params[x];
			};
		}(key);
	}
}
var a = new A({
	'x': 'X',
	'y': 'Y',
	'z': 'Z'
});

console.log(a.x())
a.y();
a.z();