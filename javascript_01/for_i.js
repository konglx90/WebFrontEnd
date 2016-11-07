/**
 * Created by kong90 on 16-5-20.
 */
/*
实现异步循环
 */

for (var i=0; i<5; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000*(i+1))
} // 5 5 5 5 5 ...

for (var j=0; j<5; j++){
    var temp = j;  //注意在js里无块级作用域， temp声明会提升
    setTimeout(function(){
        console.log(temp);
    }, 1000*(j+1))
} // 4 4 4 4 ...

// 以上代码等同于
/*


var temp;
for (var i=0; i<5; i++) {
 	temp = i;
	setTimeout(function(){
		console.log(temp);
  	}, 1000 * (i+1));
}


 */


// 正解， 创建闭包，延迟执行

for (var k=0; k<5; k++){
    (function(num){
        setTimeout(function(){
            console.log(num);
        }, 1000*(k+1))
    })(k)
} // 0 1 2 3 ...



