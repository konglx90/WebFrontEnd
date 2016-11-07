// 用于js性能的小工具
//
console.time("Array initialize");
var arr = new Array(100),
		    len = arr.length,
				    i;

for (i = 0; i < len; i++) {
	    arr[i] = new Object();
};
console.timeEnd("Array initialize"); // Outputs: Array initialize: 0.711ms


